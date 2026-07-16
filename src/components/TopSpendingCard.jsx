import { useContext } from "react";
import { FiPieChart } from "react-icons/fi";

import { TransactionContext } from "../context/TransactionContext";
import { getTopSpendingCategory } from "../utils/dashboardAnalytics";
import { formatCurrency } from "../utils/formatCurrency";

import Card from "./ui/Card";

function TopSpendingCard() {
  const { transactions } = useContext(TransactionContext);

  const topCategory =
    getTopSpendingCategory(transactions);

  if (!topCategory) {
    return (
      <Card
        glow
        className="p-7"
      >
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Top Spending
        </p>

        <h3 className="mt-8 text-2xl font-bold text-slate-900 dark:text-white">
          No Data Yet
        </h3>

        <p className="mt-3 text-slate-500 dark:text-slate-400">
          Add some expenses to discover your highest spending category.
        </p>
      </Card>
    );
  }

  return (
    <Card
      glow
      className="p-7"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Top Spending
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white">
            {topCategory.category}
          </h2>

        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
          <FiPieChart size={24} />
        </div>

      </div>

      <h3 className="mt-8 text-4xl font-black text-red-500">
        {formatCurrency(topCategory.amount)}
      </h3>

      <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">

        <div
          className="h-full rounded-full bg-gradient-to-r from-rose-500 via-red-500 to-orange-500 "
          style={{
            width: `${topCategory.percentage}%`,
          }}
        />

      </div>

      <div className="mt-5 flex items-center justify-between">

  <span className="text-sm text-slate-500 dark:text-slate-400">
    {topCategory.percentage}% of monthly expenses
  </span>

  <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-500">
    Highest
  </span>

</div>

<p className="mt-6 border-t border-slate-200/70 pt-5 text-sm leading-6 text-slate-500 dark:border-slate-700/60 dark:text-slate-400">
  Focus on reducing spending in{" "}
  <span className="font-semibold text-slate-900 dark:text-white">
    {topCategory.category}
  </span>{" "}
  to improve your monthly savings.
</p>

    </Card>
  );
}

export default TopSpendingCard;