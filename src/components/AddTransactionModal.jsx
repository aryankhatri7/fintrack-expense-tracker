import {
  useState,
  useContext,
  useEffect,
} from "react";

import {
  FiX,
  FiPlusCircle,
  FiEdit,
  FiCalendar,
  FiCreditCard,
} from "react-icons/fi";

import { FaRupeeSign } from "react-icons/fa";

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
    paymentMethod: "UPI",
    date: new Date()
      .toISOString()
      .split("T")[0],
    notes: "",
  };

  const [formData, setFormData] =
    useState(initialState);

  useEffect(() => {
    if (editData) {
      setFormData({
        ...initialState,
        ...editData,
        date:
          editData.date
            ? editData.date.split("T")[0]
            : initialState.date,
      });
    } else {
      setFormData(initialState);
    }
  }, [editData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
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
      amount: Number(
        formData.amount
      ),
    };

    if (editData) {
      editTransaction(
        transactionData
      );
    } else {
      addTransaction(
        transactionData
      );
    }

    setFormData(initialState);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">

      <Card
        glow
        className="w-full max-w-3xl max-h-[92vh] overflow-y-auto p-6 md:p-8"
      >

        {/* Header */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500">

              {editData ? (
                <FiEdit size={24} />
              ) : (
                <FiPlusCircle
                  size={24}
                />
              )}

            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">

                {editData
                  ? "Edit Transaction"
                  : "Add Transaction"}

              </h2>

              <p className="text-slate-500 dark:text-slate-400">

                Record every rupee.
                Build better habits.

              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="
flex h-11 w-11 items-center justify-center
rounded-xl
text-slate-500
hover:bg-red-500/10
hover:text-red-500
active:scale-95
transition-all
cursor-pointer
"
          >
            <FiX size={22} />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >

          <div className="grid gap-6 md:grid-cols-2">

            {/* Title */}

            <div>

              <label className="mb-2 block font-medium">

                Title

              </label>

              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Netflix Subscription"
                className="w-full rounded-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700 px-4 py-3 outline-none focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500"
              />

            </div>

            {/* Amount */}

            <div>

              <label className="mb-2 block font-medium">

                Amount

              </label>

              <div className="relative">

                <FaRupeeSign
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="number"
                  name="amount"
                  min="1"
                  step="0.01"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full rounded-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700 py-3 pl-11 pr-4 outline-none focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500"
                />

              </div>

            </div>
                        {/* Type */}

            <div>

              <label className="mb-2 block font-medium">
                Type
              </label>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700 px-4 py-3 outline-none focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500"
              >
                <option value="expense">
                  Expense
                </option>

                <option value="income">
                  Income
                </option>

              </select>

            </div>

            {/* Category */}

            <div>

              <label className="mb-2 block font-medium">
                Category
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700 px-4 py-3 outline-none focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500"
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

            {/* Payment Method */}

            <div>

              <label className="mb-2 flex items-center gap-2 font-medium">

                <FiCreditCard />

                Payment Method

              </label>

              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700 px-4 py-3 outline-none focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500"
              >
                <option>UPI</option>
                <option>Cash</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>Net Banking</option>
                <option>Wallet</option>

              </select>

            </div>

            {/* Date */}

            <div>

              <label className="mb-2 flex items-center gap-2 font-medium">

                <FiCalendar />

                Date

              </label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700 px-4 py-3 outline-none focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500"
              />

            </div>

          </div>

          {/* Notes */}

          <div>

            <label className="mb-2 block font-medium">
              Notes
            </label>

            <textarea
              rows={4}
              maxLength={250}
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Add any notes about this transaction..."
              className="w-full resize-none rounded-2xl border border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-700 px-4 py-3 outline-none focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500"
            />

            <p className="mt-2 text-right text-xs text-slate-400">
              {formData.notes.length}/250
            </p>

          </div>

          {/* Buttons */}

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="w-full sm:w-auto"
            >
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