import {
  FiEdit2,
  FiTrash2,
  FiCalendar,
} from "react-icons/fi";

import Card from "../ui/Card";
import CategoryIcon from "./CategoryIcon";
import { formatCurrency } from "../../utils/formatCurrency";

function TransactionCard({
  transaction,
  onEdit,
  onDelete,
}) {
  const isIncome =
    transaction.type === "income";

  return (
    <Card
      className="group p-5 transition-all duration-300 hover:-translate-y-1"
      glow
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        {/* Left */}

        <div className="flex items-start gap-4">

          <CategoryIcon
            category={transaction.category}
          />

          <div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {transaction.title}
            </h3>

            <div className="mt-2 flex flex-wrap items-center gap-2">

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {transaction.category}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  isIncome
                    ? "bg-emerald-500/10 text-emerald-500"
                    : "bg-red-500/10 text-red-500"
                }`}
              >
                {isIncome
                  ? "Income"
                  : "Expense"}
              </span>

            </div>

            {transaction.notes && (
              <p className="mt-3 max-w-lg text-sm text-slate-500 dark:text-slate-400">
                {transaction.notes}
              </p>
            )}

            <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">

              <FiCalendar size={15} />

              {new Date(
                transaction.createdAt
              ).toLocaleDateString("en-IN")}

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center justify-between gap-5 md:flex-col md:items-end">

          <h2
            className={`text-2xl font-black ${
              isIncome
                ? "text-emerald-500"
                : "text-red-500"
            }`}
          >
            {isIncome ? "+" : "-"}
            {formatCurrency(transaction.amount)}
          </h2>

          <div className="flex items-center gap-2">

            <button
              onClick={() =>
                onEdit(transaction)
              }
              className="rounded-xl p-2 text-slate-500 transition hover:bg-emerald-500/10 hover:text-emerald-500"
            >
              <FiEdit2 size={18} />
            </button>

            <button
              onClick={() =>
                onDelete(transaction._id)
              }
              className="rounded-xl p-2 text-slate-500 transition hover:bg-red-500/10 hover:text-red-500"
            >
              <FiTrash2 size={18} />
            </button>

          </div>

        </div>

      </div>
    </Card>
  );
}

export default TransactionCard;