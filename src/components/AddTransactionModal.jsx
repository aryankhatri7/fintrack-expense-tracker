import {
  useState,
  useContext,
  useEffect,
} from "react";

import {
  FiX,
  FiPlusCircle,
  FiEdit,
  FiDollarSign,
} from "react-icons/fi";

import Card from "./ui/Card";
import Button from "./ui/Button";

import {
  TransactionContext,
} from "../context/TransactionContext";

function AddTransactionModal({
  isOpen,
  onClose,
  editData,
}) {
  const {
    addTransaction,
    editTransaction,
  } = useContext(TransactionContext);

  const initialState = {
    title: "",
    amount: "",
    category: "Food",
    type: "expense",
    notes: "",
  };

  const [formData, setFormData] =
    useState(initialState);

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    } else {
      setFormData(initialState);
    }
  }, [editData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.amount
    )
      return;

    const transactionData = {
      _id: editData?._id,
      ...formData,
      amount: Number(formData.amount),
    };

    if (editData) {
      editTransaction(transactionData);
    } else {
      addTransaction(transactionData);
    }

    setFormData(initialState);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">

      <Card
        glow
        className="w-full max-w-2xl p-8"
      >
        {/* Header */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500">

              {editData ? (
                <FiEdit size={24} />
              ) : (
                <FiPlusCircle size={24} />
              )}

            </div>

            <div>

              <h2 className="text-3xl font-black text-slate-900 dark:text-white">

                {editData
                  ? "Edit Transaction"
                  : "Add Transaction"}

              </h2>

              <p className="text-slate-500 dark:text-slate-400">
                Keep your finances updated.
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <FiX size={22} />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="mb-2 block text-sm font-medium">
                Title
              </label>

              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Netflix Subscription"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500 dark:border-slate-700 dark:bg-slate-900"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Amount
              </label>

              <div className="relative">

                <FiDollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="number"
                  name="amount"
                  min="1"
                  step="0.01"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-violet-500 dark:border-slate-700 dark:bg-slate-900"
                />

              </div>

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Type
              </label>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900"
              >
                <option value="expense">
                  Expense
                </option>

                <option value="income">
                  Income
                </option>

              </select>

            </div>

            <div>

              <label className="mb-2 block text-sm font-medium">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900"
              >
                <option>Food</option>
                <option>Transport</option>
                <option>Shopping</option>
                <option>Bills</option>
                <option>Rent</option>
                <option>Healthcare</option>
                <option>Entertainment</option>
                <option>Education</option>
                <option>Investment</option>
                <option>Salary</option>
                <option>Freelance</option>
                <option>Other</option>
              </select>

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Notes
            </label>

            <textarea
              rows={4}
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Optional notes..."
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-violet-500 dark:border-slate-700 dark:bg-slate-900"
            />

            <p className="mt-2 text-right text-xs text-slate-400">
              {formData.notes.length}/250
            </p>

          </div>

          <div className="flex justify-end gap-3">

            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button type="submit">

              {editData
                ? "Update Transaction"
                : "Save Transaction"}

            </Button>

          </div>

        </form>

      </Card>

    </div>
  );
}

export default AddTransactionModal;