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

function Transactions() {

  const {
    transactions,
    deleteTransaction,
  } = useContext(TransactionContext)

  const [searchTerm, setSearchTerm] =
    useState("")

  const [filterType, setFilterType] =
    useState("all")

  const [openModal, setOpenModal] =
    useState(false)

  const [
    selectedTransaction,
    setSelectedTransaction,
  ] = useState(null)

  const filteredTransactions =
    transactions.filter((item) => {

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )

      const matchesFilter =
        filterType === "all"
          ? true
          : item.type === filterType

      return (
        matchesSearch &&
        matchesFilter
      )

    })

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Transactions
        </h1>

        <p className="text-slate-500 dark:text-white/50 mt-2">
          Manage and track your financial activity
        </p>

      </div>

      <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-6 transition-all duration-300">

        <div className="flex flex-col md:flex-row gap-4 mb-6">

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
              className="w-full bg-slate-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 outline-none"
            />

          </div>

          <div className="flex gap-3">

            <button
              onClick={() =>
                setFilterType("all")
              }
              className={`px-5 py-3 rounded-2xl transition-all ${
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
              className={`px-5 py-3 rounded-2xl transition-all ${
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
              className={`px-5 py-3 rounded-2xl transition-all ${
                filterType === "expense"
                  ? "bg-red-600 text-white"
                  : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-white/60"
              }`}
            >
              Expense
            </button>

          </div>

        </div>

        <div className="space-y-4">

          {filteredTransactions.length === 0 ? (

            <div className="text-center py-10 text-slate-500 dark:text-white/50">
              No transactions found
            </div>

          ) : (

            filteredTransactions.map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between bg-slate-50 dark:bg-white/5 border border-black/10 dark:border-white/10 p-5 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300"
              >

                <div>

                  <h3 className="text-slate-900 dark:text-white font-semibold text-lg">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-3 mt-2">

                    <span className="text-slate-500 dark:text-white/50 text-sm">
                      {item.category}
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

                <div className="flex items-center gap-5">

                  <div
                    className={`font-bold text-xl ${
                      item.type === "income"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {item.type === "income"
                      ? "+"
                      : "-"}

                    ${item.amount}
                  </div>

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
                    onClick={() =>
                      deleteTransaction(item.id)
                    }
                    className="text-slate-400 dark:text-white/40 hover:text-red-400 transition-all"
                  >
                    <FiTrash2 size={20} />
                  </button>

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