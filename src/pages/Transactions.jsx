import { useContext, useState } from "react";

import AddTransactionModal from "../components/AddTransactionModal";

import TransactionStats from "../components/transactions/TransactionStats";
import TransactionFilters from "../components/transactions/TransactionFilters";
import TransactionCard from "../components/transactions/TransactionCard";
import EmptyTransactions from "../components/transactions/EmptyTransactions";

import { TransactionContext } from "../context/TransactionContext";

function Transactions() {
  const {
    transactions,
    deleteTransaction,
  } = useContext(TransactionContext);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [categoryFilter, setCategoryFilter] =
    useState("all");

  const [filterType, setFilterType] =
    useState("all");

  const [sortBy, setSortBy] =
    useState("newest");

  const [openModal, setOpenModal] =
    useState(false);

  const [
    selectedTransaction,
    setSelectedTransaction,
  ] = useState(null);

  const clearFilters = () => {
    setSearchTerm("");
    setFilterType("all");
    setCategoryFilter("all");
    setSortBy("newest");
  };

  const filteredTransactions =
    transactions.filter((item) => {
      const matchesSearch =
        (item.title || "")
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        (item.category || "")
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        (item.type || "")
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesType =
        filterType === "all"
          ? true
          : item.type === filterType;

      const matchesCategory =
        categoryFilter === "all"
          ? true
          : item.category ===
            categoryFilter;

      return (
        matchesSearch &&
        matchesType &&
        matchesCategory
      );
    });

  const sortedTransactions = [
    ...filteredTransactions,
  ];

  sortedTransactions.sort((a, b) => {
    switch (sortBy) {
      case "highest":
        return b.amount - a.amount;

      case "lowest":
        return a.amount - b.amount;

      case "az":
        return (
          a.title || ""
        ).localeCompare(
          b.title || "",
          undefined,
          {
            sensitivity: "base",
          }
        );

      case "za":
        return (
          b.title || ""
        ).localeCompare(
          a.title || "",
          undefined,
          {
            sensitivity: "base",
          }
        );

      case "oldest":
        return (
          new Date(a.createdAt) -
          new Date(b.createdAt)
        );

      default:
        return (
          new Date(b.createdAt) -
          new Date(a.createdAt)
        );
    }
  });

  const totalIncome =
    sortedTransactions
      .filter(
        (item) =>
          item.type === "income"
      )
      .reduce(
        (sum, item) =>
          sum + item.amount,
        0
      );

  const totalExpense =
    sortedTransactions
      .filter(
        (item) =>
          item.type === "expense"
      )
      .reduce(
        (sum, item) =>
          sum + item.amount,
        0
      );

  const netBalance =
    totalIncome - totalExpense;

  const incomeCount =
    sortedTransactions.filter(
      (item) =>
        item.type === "income"
    ).length;

  const expenseCount =
    sortedTransactions.filter(
      (item) =>
        item.type === "expense"
    ).length;

  const categories = [
    "all",
    ...new Set(
      transactions
        .map(
          (item) =>
            item.category
        )
        .filter(Boolean)
    ),
  ];

  const handleEdit = (
    transaction
  ) => {
    setSelectedTransaction(
      transaction
    );
    setOpenModal(true);
  };

  const handleDelete = (id) => {
    if (
      window.confirm(
        "Delete this transaction?"
      )
    ) {
      deleteTransaction(id);
    }
  };

  return (
    <div className="space-y-8">

      <TransactionStats
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        netBalance={netBalance}
        incomeCount={incomeCount}
        expenseCount={expenseCount}
      />

      <TransactionFilters
        searchTerm={searchTerm}
        setSearchTerm={
          setSearchTerm
        }
        filterType={filterType}
        setFilterType={
          setFilterType
        }
        categoryFilter={
          categoryFilter
        }
        setCategoryFilter={
          setCategoryFilter
        }
        sortBy={sortBy}
        setSortBy={setSortBy}
        categories={categories}
        clearFilters={
          clearFilters
        }
      />

      {sortedTransactions.length ===
      0 ? (
        <EmptyTransactions
          onAddTransaction={() =>
            setOpenModal(true)
          }
        />
      ) : (
        <div className="space-y-5">
          {sortedTransactions.map(
            (transaction) => (
              <TransactionCard
                key={
                  transaction._id
                }
                transaction={
                  transaction
                }
                onEdit={
                  handleEdit
                }
                onDelete={
                  handleDelete
                }
              />
            )
          )}
        </div>
      )}

      <AddTransactionModal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedTransaction(
            null
          );
        }}
        editData={
          selectedTransaction
        }
      />
    </div>
  );
}

export default Transactions;