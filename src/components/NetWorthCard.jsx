import { useContext } from "react";
import Button from "./ui/Button";
import {
  FiTrendingUp,
  FiTrendingDown,
  FiDollarSign,
} from "react-icons/fi";

import { TransactionContext } from "../context/TransactionContext";

import {
  getNetWorthData,
} from "../utils/dashboardAnalytics";

import {
  formatCurrency,
} from "../utils/formatCurrency";

function NetWorthCard({ onAddTransaction }) {

  const { transactions } = useContext(TransactionContext);

  const {
    balance,
    income,
    expenses,
    savings,
    savingsRate,
    score,
    status,
  } = getNetWorthData(transactions);

  return (

    <section className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/80 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-slate-700/60 dark:bg-slate-900/80">
<div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-[110px]" />

<div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-[110px]" />
      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
Net Worth
</p>

            <h1 className="mt-3 text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white break-words">
              {formatCurrency(balance)}
            </h1>

          </div>

          <div className="rounded-2xl bg-emerald-500/10 text-emerald-500 backdrop-blur-md p-4">

            <FiDollarSign className="text-3xl text-emerald-500" />

          </div>

        </div>

        {/* Health Badge */}
        <div className="mt-10 flex flex-wrap items-center gap-5">

          <span className="rounded-full bg-emerald-500/10 text-emerald-500 backdrop-blur-md px-4 py-2 text-sm font-medium">
            {savingsRate}% Savings Rate
          </span>

          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              score >= 80
                ? "bg-green-400 text-green-950"
                : score >= 60
                ? "bg-yellow-300 text-yellow-950"
                : score >= 40
                ? "bg-orange-300 text-orange-950"
                : "bg-red-300 text-red-950"
            }`}
          >
            {status}
          </span>

        </div>
<Button
  variant="primary"
  onClick={onAddTransaction}
  className="mt-6"
>
  + Add Transaction
</Button>
        {/* Metrics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl p-6">

            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Income
              </p>

              <FiTrendingUp className="text-green-300 text-xl" />

            </div>

            <h3 className="mt-3 text-2xl font-black text-slate-900 dark:text-white">
              {formatCurrency(income)}
            </h3>

          </div>

          <div className="rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl p-6">

            <div className="flex items-center justify-between">

              <p className="text-white/70 text-sm">
                Expenses
              </p>

              <FiTrendingDown className="text-red-300 text-xl" />

            </div>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {formatCurrency(expenses)}
            </h3>

          </div>

          <div className="rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl p-6">

            <div className="flex items-center justify-between">

              <p className="text-white/70 text-sm">
                Savings
              </p>

              <FiDollarSign className="text-blue-300 text-xl" />

            </div>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {formatCurrency(savings)}
            </h3>

          </div>

        </div>

        {/* Progress */}
        <div className="mt-8">

          <div className="flex justify-between text-slate-500 dark:text-slate-400 text-sm mb-2">

            <span>Financial Health</span>

            <span>{score}/100</span>

          </div>

          <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">

            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-700"
              style={{
                width: `${score}%`,
              }}
            />

          </div>

        </div>

        {/* Insight */}
        <div className="mt-8 rounded-3xl border border-slate-200/70 dark:border-slate-700/60 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl p-6">

          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Financial Insight
          </p>

          <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">

            {score >= 80 &&
              `Excellent work! You're saving ${savingsRate}% of your income this month. Keep it up! 🎉`}

            {score >= 60 && score < 80 &&
              `You're managing your money well. A little more saving can significantly improve your financial health.`}

            {score >= 40 && score < 60 &&
              `Your finances are stable, but reducing unnecessary expenses will help boost your savings.`}

            {score < 40 &&
              `Your spending is currently too high. Focus on cutting non-essential expenses and increasing savings.`}

          </p>

        </div>

      </div>

    </section>

  );
}

export default NetWorthCard;