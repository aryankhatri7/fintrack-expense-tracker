import { useContext } from "react";
import {
  FiCalendar,
  FiTrendingUp,
} from "react-icons/fi";

import Card from "./ui/Card";

import { TransactionContext } from "../context/TransactionContext";
import { getMonthlySummary } from "../utils/dashboardAnalytics";
import { formatCurrency } from "../utils/formatCurrency";

function MonthlySummaryCard() {
  const { transactions } = useContext(TransactionContext);

  const summary = getMonthlySummary(transactions);

  if (summary.transactionCount === 0) {
    return (
      <Card
        glow
        className="p-7"
      >
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Monthly Summary
        </p>

        <h2 className="mt-8 text-2xl font-black text-slate-900 dark:text-white">
          No Data Yet
        </h2>

        <p className="mt-3 leading-7 text-slate-500 dark:text-slate-400">
          Add your first transaction to see your income, expenses,
          savings and monthly insights.
        </p>
      </Card>
    );
  }

  return (
    <Card
      glow
      className="p-7"
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Monthly Summary
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            This Month
          </h2>

        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500">
          <FiCalendar size={24} />
        </div>

      </div>

      {/* Summary */}

      <div className="mt-8 space-y-5">

        <SummaryRow
          title="Income"
          value={formatCurrency(summary.income)}
          color="text-emerald-500"
        />

        <SummaryRow
          title="Expenses"
          value={formatCurrency(summary.expenses)}
          color="text-rose-500"
        />

        <SummaryRow
          title="Savings"
          value={formatCurrency(summary.savings)}
          color="text-cyan-500"
        />

        <SummaryRow
          title="Savings Rate"
          value={`${summary.savingsRate}%`}
          color="text-violet-500"
        />

        <SummaryRow
          title="Transactions"
          value={summary.transactionCount}
          color="text-slate-900 dark:text-white"
        />

      </div>

      {/* Biggest Expense */}

      {summary.biggestExpense && (

        <div className="mt-8 rounded-3xl border border-red-500/10 bg-red-500/5 p-6">

          <div className="flex items-center gap-2 text-red-500">

            <FiTrendingUp />

            <span className="text-sm font-semibold">
              Biggest Expense
            </span>

          </div>

          <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
            {summary.biggestExpense.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {summary.biggestExpense.category}
          </p>

          <p className="mt-4 text-3xl font-black text-red-500">
            {formatCurrency(summary.biggestExpense.amount)}
          </p>

          <div className="mt-5 border-t border-red-500/10 pt-5">

            <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
              This was your highest expense this month. Reducing spending in{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                {summary.biggestExpense.category}
              </span>{" "}
              can improve your monthly savings.
            </p>

          </div>

        </div>

      )}

    </Card>
  );
}

function SummaryRow({
  title,
  value,
  color,
}) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200/70 pb-4 last:border-none dark:border-slate-700/60">

      <span className="text-slate-500 dark:text-slate-400">
        {title}
      </span>

      <span className={`font-bold ${color}`}>
        {value}
      </span>

    </div>
  );
}

export default MonthlySummaryCard;