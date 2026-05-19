import {
  useState,
  useContext,
  useEffect,
} from "react"

import { TransactionContext } from "../context/TransactionContext"

function AddTransactionModal({
  isOpen,
  onClose,
  editData,
}) {

  const {
    addTransaction,
    editTransaction,
  } = useContext(TransactionContext)

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "Food",
    type: "expense",
    notes: "",
  })

  useEffect(() => {

    if (editData) {

      setFormData(editData)

    } else {

      setFormData({
        title: "",
        amount: "",
        category: "Food",
        type: "expense",
        notes: "",
      })

    }

  }, [editData])

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if (
      !formData.title ||
      !formData.amount
    ) return

    const transactionData = {
      id: editData
        ? editData.id
        : Date.now(),

      title: formData.title,

      amount: Number(
        formData.amount
      ),

      category: formData.category,

      type: formData.type,

      notes: formData.notes,

      createdAt: editData
        ? editData.createdAt
        : new Date(),
    }

    if (editData) {

      editTransaction(
        transactionData
      )

    } else {

      addTransaction(
        transactionData
      )

    }

    setFormData({
      title: "",
      amount: "",
      category: "Food",
      type: "expense",
      notes: "",
    })

    onClose()

  }

  if (!isOpen) return null

  return (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">

    <div className="w-full max-w-lg rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-8 shadow-2xl transition-all duration-300">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-slate-900 dark:text-white text-2xl font-bold">

          {editData
            ? "Edit Transaction"
            : "Add Transaction"}

        </h2>

        <button
          onClick={onClose}
          className="text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-all"
        >
          ✕
        </button>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <input
          type="text"
          name="title"
          placeholder="Transaction Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 outline-none focus:ring-2 focus:ring-violet-500 transition-all"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 outline-none focus:ring-2 focus:ring-violet-500 transition-all"
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-4 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-violet-500 transition-all"
        >

          <option value="expense">
            Expense
          </option>

          <option value="income">
            Income
          </option>

        </select>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-4 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-violet-500 transition-all"
        >

          <option>Food</option>
          <option>Shopping</option>
          <option>Bills</option>
          <option>Travel</option>
          <option>Salary</option>
          <option>Freelance</option>

        </select>

        <textarea
          name="notes"
          placeholder="Notes"
          rows="4"
          value={formData.notes}
          onChange={handleChange}
          className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-4 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/30 outline-none resize-none focus:ring-2 focus:ring-violet-500 transition-all"
        />

        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg"
        >

          {editData
            ? "Update Transaction"
            : "Save Transaction"}

        </button>

      </form>

    </div>

  </div>
)
}

export default AddTransactionModal