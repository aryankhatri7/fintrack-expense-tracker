import {
  createContext,
  useState,
  useEffect,
} from "react"

import { toast } from "react-toastify"

export const TransactionContext =
  createContext()

function TransactionProvider({
  children,
}) {

  const [transactions, setTransactions] =
    useState(() => {

      const savedTransactions =
        localStorage.getItem("transactions")

      return savedTransactions
        ? JSON.parse(savedTransactions)
        : []

    })

  // Add Transaction
  const addTransaction = (
    transaction
  ) => {

    setTransactions((prev) => [
      transaction,
      ...prev,
    ])

    toast.success(
      "Transaction added successfully"
    )

  }

  // Delete Transaction
  const deleteTransaction = (id) => {

    setTransactions((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    )

    toast.error(
      "Transaction deleted"
    )

  }

  // Edit Transaction
  const editTransaction = (
    updatedTransaction
  ) => {

    setTransactions((prev) =>
      prev.map((item) =>
        item.id === updatedTransaction.id
          ? updatedTransaction
          : item
      )
    )

    toast.info(
      "Transaction updated"
    )

  }

  // Save to LocalStorage
  useEffect(() => {

    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    )

  }, [transactions])

  return (

    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        editTransaction,
      }}
    >

      {children}

    </TransactionContext.Provider>

  )
}

export default TransactionProvider