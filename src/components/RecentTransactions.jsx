import { useContext, useState } from "react"

import {
  FiTrash2,
  FiEdit,
} from "react-icons/fi"

import { TransactionContext }
  from "../context/TransactionContext"

import AddTransactionModal
  from "./AddTransactionModal"

function RecentTransactions() {

  const {
    transactions,
    deleteTransaction,
  } = useContext(TransactionContext)

  const [openModal, setOpenModal] =
    useState(false)

  const [
    selectedTransaction,
    setSelectedTransaction,
  ] = useState(null)

  return (
    <>

      <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-6 transition-all duration-300">

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
              Recent Transactions
            </h2>

            <p className="text-slate-500 dark:text-white/50 mt-1">
              Latest financial activity
            </p>

          </div>

        </div>

        <div className="space-y-4">

          {transactions.length === 0 ? (

            <div className="text-center py-10 text-slate-500 dark:text-white/50">
              No transactions yet
            </div>

          ) : (

            transactions.map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 shadow-sm dark:shadow-none"
              >

                <div>

                  <h3 className="text-slate-900 dark:text-white font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 dark:text-white/50 text-sm mt-1">
                    {item.category}
                  </p>

                </div>

                <div className="flex items-center gap-4">

                  <div
                    className={`font-bold text-lg ${
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

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => {

                        setSelectedTransaction(item)

                        setOpenModal(true)

                      }}
                      className="text-slate-400 dark:text-white/40 hover:text-violet-500 transition-all"
                    >
                      <FiEdit size={18} />
                    </button>

                    <button
                      onClick={() =>
                        deleteTransaction(item.id)
                      }
                      className="text-slate-400 dark:text-white/40 hover:text-red-500 transition-all"
                    >
                      <FiTrash2 size={18} />
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

    </>
  )
}

export default RecentTransactions