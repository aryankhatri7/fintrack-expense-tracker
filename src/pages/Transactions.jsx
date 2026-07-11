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

    <div className="space-y-6 md:space-y-8">

     
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
          <div className="grid grid-cols-3 gap-3">

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

          </div>

        </div>

        {/* Transactions */}
        <div className="space-y-4">

          {filteredTransactions.length === 0 ? (

            <div className="text-center py-10 text-slate-500 dark:text-white/50">
              No transactions found
            </div>

          ) : (

            filteredTransactions.map((item) => (

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
                      onClick={() =>
                        deleteTransaction(item._id)
                      }
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