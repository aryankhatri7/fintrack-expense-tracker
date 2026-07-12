import { useContext } from "react";
import { FiTrendingUp } from "react-icons/fi";

import { TransactionContext } from "../context/TransactionContext";
import { getTopSpendingCategory } from "../utils/dashboardAnalytics";
import { formatCurrency } from "../utils/formatCurrency";

function TopSpendingCard() {
  const { transactions } = useContext(TransactionContext);

  const topCategory = getTopSpendingCategory(transactions);

  if (!topCategory) {
    return (
      <div className="rounded-3xl p-6 border bg-white dark:bg-white/5 border-black/10 dark:border-white/10 shadow-lg">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          🔥 Top Spending Category
        </h2>

        <p className="mt-6 text-slate-500 dark:text-white/60">
          No expenses recorded this month.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl p-6 border bg-white dark:bg-white/5 border-black/10 dark:border-white/10 shadow-lg hover:shadow-xl transition">

      <div className="flex items-center justify-between">

        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
          🔥 Top Spending
        </h2>

        <div className="p-3 rounded-2xl bg-red-500/20 text-red-400">
          <FiTrendingUp />
        </div>

      </div>

<div className="mt-8">

  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
    {topCategory.category}
  </h3>

  <p className="mt-3 text-3xl font-bold text-red-500">
    {formatCurrency(topCategory.amount)}
  </p>

  {/* Progress Bar */}

  <div className="mt-6">

    <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">

      <div
        className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-400"
        style={{
          width: `${topCategory.percentage}%`,
        }}
      />

    </div>

  </div>

  <div className="mt-4 flex justify-between items-center">

    <p className="text-slate-500 dark:text-white/60">
      {topCategory.percentage}% of monthly expenses
    </p>

    <span className="text-xs px-3 py-1 rounded-full bg-red-500/10 text-red-500 font-medium">
      Highest
    </span>

  </div>

  <p className="mt-5 text-sm text-slate-400 dark:text-white/40">
    Highest spending category this month
  </p>

</div>

    </div>
  );
}

export default TopSpendingCard;