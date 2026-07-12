import { useContext, useState } from "react"

import {
  FiTrash2,
  FiSearch,
  FiEdit,
} from "react-icons/fi"

import AddTransactionModal
  from "../components/AddTransactionModal"

import { TransactionContext }
  from "../context/TransactionContext"
import { formatCurrency }
  from "../utils/formatCurrency"
function Transactions() {

  const {
    transactions,
    deleteTransaction,
  } = useContext(TransactionContext)

  const [searchTerm, setSearchTerm] =
    useState("")

  const [categoryFilter, setCategoryFilter] =
  useState("all");

  const [filterType, setFilterType] =
    useState("all")

    const [sortBy, setSortBy] =
  useState("newest")

  const [openModal, setOpenModal] =
    useState(false)

  const [
    selectedTransaction,
    setSelectedTransaction,
  ] = useState(null)
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
    .includes(searchTerm.toLowerCase()) ||

  (item.category || "")
    .toLowerCase()
    .includes(searchTerm.toLowerCase()) ||

  (item.type || "")
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

      const matchesType =
  filterType === "all"
    ? true
    : item.type === filterType;

const matchesCategory =
  categoryFilter === "all"
    ? true
    : item.category === categoryFilter;

return (
  matchesSearch &&
  matchesType &&
  matchesCategory
);

    })
    const sortedTransactions = [...filteredTransactions];

sortedTransactions.sort((a, b) => {

  switch (sortBy) {

    case "highest":
      return b.amount - a.amount;

    case "lowest":
      return a.amount - b.amount;

    case "az":
      return (a.title || "").localeCompare(
  b.title || "",
  undefined,
  { sensitivity: "base" }
);

    case "za":
      return (b.title || "").localeCompare(
  a.title || "",
  undefined,
  {
    sensitivity: "base",
  }
);

    case "oldest":
      return new Date(a.createdAt) -
        new Date(b.createdAt);

    default:
      return new Date(b.createdAt) -
        new Date(a.createdAt);

  }

});
const totalIncome = sortedTransactions
  .filter((item) => item.type === "income")
  .reduce((sum, item) => sum + item.amount, 0);

const totalExpense = sortedTransactions
  .filter((item) => item.type === "expense")
  .reduce((sum, item) => sum + item.amount, 0);

const netBalance = totalIncome - totalExpense;

const categories = [
  "all",
  ...new Set(
      transactions
        .map(item => item.category)
        .filter(Boolean)
  ),
];

  return (

    <div className="space-y-6 md:space-y-8">

<div className="grid grid-cols-2 xl:grid-cols-4 gap-4">

  <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-5">

    <p className="text-sm text-slate-500 dark:text-white/50">
      Total Balance
    </p>

    <h2 className="mt-2 text-2xl font-bold text-violet-600 dark:text-violet-400">
      {formatCurrency(netBalance)}
    </h2>

  </div>

  <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-5">

    <p className="text-sm text-slate-500 dark:text-white/50">
      Income
    </p>

    <h2 className="mt-2 text-2xl font-bold text-green-500">
      {formatCurrency(totalIncome)}
    </h2>

  </div>

  <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-5">

    <p className="text-sm text-slate-500 dark:text-white/50">
      Expense
    </p>

    <h2 className="mt-2 text-2xl font-bold text-red-500">
      {formatCurrency(totalExpense)}
    </h2>

  </div>

  <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-5">

    <p className="text-sm text-slate-500 dark:text-white/50">
      Transactions
    </p>

    <h2 className="mt-2 text-2xl font-bold text-blue-500">
      {sortedTransactions.length}
    </h2>

  </div>

</div>
     
      {/* Main Card */}
      <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-4 md:p-6 transition-all duration-300">

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">

          {/* Search */}
          <div className="relative flex-1">

            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/40"
              size={18}
            />

            <input
              type="text"
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
              className="w-full bg-slate-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-3 md:py-4 pl-12 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 outline-none"
            />

          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">

            <button
              onClick={() =>
                setFilterType("all")
              }
              className={`px-4 py-3 rounded-2xl text-sm md:text-base transition-all ${
                filterType === "all"
                  ? "bg-violet-600 text-white"
                  : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/60"
              }`}
            >
              All
            </button>

            <button
              onClick={() =>
                setFilterType("income")
              }
              className={`px-4 py-3 rounded-2xl text-sm md:text-base transition-all ${
                filterType === "income"
                  ? "bg-green-600 text-white"
                  : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/60"
              }`}
            >
              Income
            </button>

            <button
              onClick={() =>
                setFilterType("expense")
              }
              className={`px-4 py-3 rounded-2xl text-sm md:text-base transition-all ${
                filterType === "expense"
                  ? "bg-red-600 text-white"
                  : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/60"
              }`}
            >
              Expense
            </button>
            
<select
  value={categoryFilter}
  onChange={(e) =>
    setCategoryFilter(e.target.value)
  }
  className="bg-slate-100 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-4 py-3 text-slate-900 dark:text-white"
>
  {categories.map((category) => (
    <option
      key={category}
      value={category}
    >
      {category.charAt(0).toUpperCase() +
 category.slice(1)}
    </option>
  ))}
</select>
<select
  value={sortBy}
  onChange={(e) =>
    setSortBy(e.target.value)
  }
  className="bg-slate-100 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-4 py-3 text-slate-900 dark:text-white"
>

  <option value="newest">
    Newest
  </option>

  <option value="oldest">
    Oldest
  </option>

  <option value="highest">
    Highest Amount
  </option>

  <option value="lowest">
    Lowest Amount
  </option>

  <option value="az">
    A-Z
  </option>

  <option value="za">
    Z-A
  </option>
</select>

<button
  onClick={clearFilters}
  className="px-4 py-3 rounded-2xl
  bg-slate-100
  dark:bg-white/5
  border border-black/10
  dark:border-white/10
  hover:bg-violet-600
  hover:text-white
  transition-all"
>
  Clear
</button>
          </div>

        </div>

        {/* Transactions */}
        <div className="space-y-4">

          {sortedTransactions.length === 0 ? (

            <div className="text-center py-10 text-slate-500 dark:text-white/50">
              No transactions found
            </div>

          ) : (

            sortedTransactions.map((item) => (

              <div
                key={item._id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-50 dark:bg-white/5 border border-black/10 dark:border-white/10 p-4 md:p-5 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300"
              >

                {/* Left */}
                <div className="min-w-0">

                  <h3 className="text-slate-900 dark:text-white font-semibold text-base md:text-lg break-words">
                    {item.title}
                  </h3>

                  <div className="flex items-center flex-wrap gap-2 mt-2">

                    <span className="text-slate-500 dark:text-white/50 text-sm">
                      {item.category
  ? item.category.charAt(0).toUpperCase() +
    item.category.slice(1)
  : "Uncategorized"}
                    </span>

                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        item.type === "income"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {item.type}
                    </span>

                  </div>

                </div>

                {/* Right */}
                <div className="flex items-center justify-between sm:justify-end gap-4 md:gap-5">

                  <div
                    className={`font-bold text-lg md:text-xl whitespace-nowrap ${
                      item.type === "income"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >

                    {item.type === "income"
                      ? "+"
                      : "-"}

                    {formatCurrency(item.amount)}

                  </div>

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => {

                        setSelectedTransaction(item)

                        setOpenModal(true)

                      }}
                      className="text-slate-400 dark:text-white/40 hover:text-violet-400 transition-all"
                    >
                      <FiEdit size={20} />
                    </button>

                    <button
                      onClick={() => {
    if (window.confirm("Delete this transaction?")) {
        deleteTransaction(item._id);
    }
}}
                      className="text-slate-400 dark:text-white/40 hover:text-red-400 transition-all"
                    >
                      <FiTrash2 size={20} />
                    </button>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

      <AddTransactionModal
        isOpen={openModal}
        onClose={() => {

          setOpenModal(false)

          setSelectedTransaction(null)

        }}
        editData={selectedTransaction}
      />

    </div>

  )
}

export default Transactions