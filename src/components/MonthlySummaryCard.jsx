import { useContext } from "react";
import { FiCalendar } from "react-icons/fi";

import { TransactionContext } from "../context/TransactionContext";
import { getMonthlySummary } from "../utils/dashboardAnalytics";
import { formatCurrency } from "../utils/formatCurrency";

function MonthlySummaryCard() {
  const { transactions } = useContext(TransactionContext);

  const summary = getMonthlySummary(transactions);

  return (
    <div className="rounded-3xl p-6 border bg-white dark:bg-white/5 border-black/10 dark:border-white/10 shadow-lg">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          📅 This Month Summary
        </h2>

        <div className="p-3 rounded-2xl bg-violet-500/20 text-violet-500">
          <FiCalendar />
        </div>

      </div>

      <div className="mt-8 space-y-4">

        <SummaryRow
          title="Income"
          value={formatCurrency(summary.income)}
        />

        <SummaryRow
          title="Expenses"
          value={formatCurrency(summary.expenses)}
        />

        <SummaryRow
          title="Savings"
          value={formatCurrency(summary.savings)}
        />

        <SummaryRow
          title="Savings Rate"
          value={`${summary.savingsRate}%`}
        />

        <SummaryRow
          title="Transactions"
          value={summary.transactionCount}
        />

      </div>

      {summary.biggestExpense && (

        <div className="mt-8 rounded-2xl border border-red-200 dark:border-red-500/20 bg-red-500/10 p-5">

          <p className="text-sm font-medium text-red-500">
  🚨 Biggest Expense
</p>

          <h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
            {summary.biggestExpense.title}
          </h3>

          <p className="mt-2 text-2xl font-bold text-red-500">
            {formatCurrency(summary.biggestExpense.amount)}
          </p>

        </div>

      )}

    </div>
  );
}

function SummaryRow({ title, value }) {

  const colors = {
    Income: "text-green-500",
    Expenses: "text-red-500",
    Savings: "text-blue-500",
    "Savings Rate": "text-violet-500",
    Transactions: "text-slate-900 dark:text-white",
  };

  return (

    <div className="flex items-center justify-between py-2 border-b border-black/5 dark:border-white/5 last:border-none">

      <span className="text-slate-500 dark:text-white/60">
        {title}
      </span>

      <span className={`font-bold ${colors[title]}`}>
        {value}
      </span>

    </div>

  );
}

export default MonthlySummaryCard;