import {
  createContext,
  useState,
  useEffect,
} from "react"

import { toast } from "react-toastify"

import { useAuth } from "./AuthContext";
import {
  getTransactions,
  createTransaction,
  deleteTransaction as deleteTransactionService,
  updateTransaction as updateTransactionService,
} from "../services/transactionService";

export const TransactionContext =
  createContext()

function TransactionProvider({
  children,
}) {

const { token } = useAuth();

  const [transactions, setTransactions] = useState([]);
useEffect(() => {
  const fetchTransactions = async () => {
    if (!token) {
      setTransactions([]);
      return;
    }

    try {
      const data = await getTransactions(token);
      setTransactions(data);
    } catch (error) {
      toast.error("Failed to load transactions");
      console.error(error);
    }
  };

  fetchTransactions();
}, [token]);
  // Add Transaction
  const addTransaction = async (transaction) => {
  try {
    const newTransaction = await createTransaction(
      transaction,
      token
    );

    setTransactions((prev) => [
      newTransaction,
      ...prev,
    ]);

    toast.success("Transaction added successfully");
  } catch (error) {
    toast.error("Failed to add transaction");
    console.error(error);
  }
};

  

  // Delete Transaction
const deleteTransaction = async (id) => {
  try {
    await deleteTransactionService(id, token);

    setTransactions((prev) =>
      prev.filter((item) => item._id !== id)
    );

    toast.success("Transaction deleted successfully");
  } catch (error) {
    toast.error("Failed to delete transaction");
    console.error(error);
  }
};
// Edit Transaction
const editTransaction = async (updatedTransaction) => {
  try {
    const updated = await updateTransactionService(
      updatedTransaction._id,
      updatedTransaction,
      token
    );

    setTransactions((prev) =>
      prev.map((item) =>
        item._id === updated._id ? updated : item
      )
    );

    toast.success("Transaction updated successfully");
  } catch (error) {
    toast.error("Failed to update transaction");
    console.error(error);
  }
};


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