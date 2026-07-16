import { useContext, useState } from "react";

import {
  FiTrash2,
  FiEdit,
  FiArrowUpRight,
  FiArrowDownRight,
} from "react-icons/fi";

import { TransactionContext } from "../context/TransactionContext";
import AddTransactionModal from "./AddTransactionModal";
import Card from "./ui/Card";
import Button from "./ui/Button";

import { formatCurrency } from "../utils/formatCurrency";
import { useNavigate } from "react-router-dom";


function RecentTransactions() {

  const navigate = useNavigate();

  const {
    transactions,
    deleteTransaction,
  } = useContext(TransactionContext);

  const [openModal, setOpenModal] =
    useState(false);

  const [
    selectedTransaction,
    setSelectedTransaction,
  ] = useState(null);

  return (
    <>
      <Card
        glow
        className="p-7"
      >
        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Latest Activity
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
              Recent Transactions
            </h2>

          </div>

          <Button
  variant="secondary"
  size="sm"
  onClick={() =>
    navigate("/dashboard/transactions")
  }
>
  View All
</Button>

        </div>

        {/* Empty */}

        {transactions.length === 0 ? (

          <div className="py-20 text-center">

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              No Transactions Yet
            </h3>
            <Button
  className="mt-8"
  onClick={() => setOpenModal(true)}
>
  Add First Transaction
</Button>
            <p className="mt-3 text-slate-500 dark:text-slate-400">
              Your recent financial activity will appear here.
            </p>

          </div>

        ) : (

          <div className="mt-8 space-y-4">

            {transactions
  .slice(0, 5)
  .map((item) => (

              <div
                key={item._id}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-3xl
                  border
                  border-slate-200/70
                  dark:border-slate-700/60
                  bg-white/60
                  dark:bg-slate-900/40
                  backdrop-blur-xl
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
hover:scale-[1.01]
                  hover:border-emerald-300
                  hover:shadow-xl
                "
              >

                {/* Left */}

                <div className="flex items-center gap-5">

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      item.type === "income"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : "bg-rose-500/10 text-rose-500"
                    }`}
                  >

                    {item.type === "income" ? (
                      <FiArrowDownRight size={22} />
                    ) : (
                      <FiArrowUpRight size={22} />
                    )}

                  </div>

                  <div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">

    {item.category}

    <span className="mx-2">•</span>

    {new Date(item.date).toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "short",
      }
    )}

</p>
<div className="mt-2">

  <span
    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
      item.type === "income"
        ? "bg-emerald-500/10 text-emerald-500"
        : "bg-rose-500/10 text-rose-500"
    }`}
  >
    {item.type === "income"
  ? "Income"
  : "Expense"}
  </span>

</div>
                  </div>

                </div>

                {/* Right */}

                <div className="flex items-center gap-8">

                  <div className="text-right">

                    <h3
                      className={`text-xl font-black ${
                        item.type === "income"
                          ? "text-emerald-500"
                          : "text-rose-500"
                      }`}
                    >
                      {item.type === "income"
                        ? "+"
                        : "-"}
                      {formatCurrency(item.amount)}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {new Date(item.date).toLocaleDateString(
  "en-IN",
  {
    day: "numeric",
    month: "short",
    year: "numeric",
  }
)}
                    </p>

                  </div>

                  <div className="
flex
gap-2
opacity-0
translate-x-3
transition-all
duration-300
group-hover:opacity-100
group-hover:translate-x-0
">

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSelectedTransaction(item);
                        setOpenModal(true);
                      }}
                    >
                      <FiEdit />
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        deleteTransaction(item._id)
                      }
                      className="hover:text-red-500"
                    >
                      <FiTrash2 />
                    </Button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </Card>

      <AddTransactionModal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedTransaction(null);
        }}
        editData={selectedTransaction}
      />
    </>
  );
}

export default RecentTransactions;