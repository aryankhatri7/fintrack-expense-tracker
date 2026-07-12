import { useContext } from "react";

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

    <section className="rounded-3xl overflow-hidden bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 shadow-2xl">

      <div className="p-6 md:p-8">

        {/* Header */}
        <div className="flex items-center justify-between">

          <div>

            <p className="text-white/70 uppercase tracking-wider text-sm">
              Net Worth
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white break-words">
              {formatCurrency(balance)}
            </h1>

          </div>

          <div className="rounded-2xl bg-white/15 backdrop-blur-md p-4">

            <FiDollarSign className="text-3xl text-white" />

          </div>

        </div>

        {/* Health Badge */}
        <div className="mt-8 flex flex-wrap items-center gap-4">

          <span className="rounded-full bg-white/15 backdrop-blur-md px-4 py-2 text-sm font-medium text-white">
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
<button
  onClick={onAddTransaction}
  className="mt-6 rounded-2xl bg-white px-6 py-3 font-semibold text-violet-700 shadow-lg transition hover:scale-105"
>
  + Add Transaction
</button>
        {/* Metrics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5">

            <div className="flex items-center justify-between">

              <p className="text-white/70 text-sm">
                Income
              </p>

              <FiTrendingUp className="text-green-300 text-xl" />

            </div>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {formatCurrency(income)}
            </h3>

          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5">

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

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5">

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

          <div className="flex justify-between text-white/70 text-sm mb-2">

            <span>Financial Health</span>

            <span>{score}/100</span>

          </div>

          <div className="w-full h-3 rounded-full bg-white/20 overflow-hidden">

            <div
              className="h-full rounded-full bg-white transition-all duration-700"
              style={{
                width: `${score}%`,
              }}
            />

          </div>

        </div>

        {/* Insight */}
        <div className="mt-8 rounded-2xl bg-white/10 backdrop-blur-md p-5">

          <p className="text-white/70 text-sm uppercase tracking-wide">
            Financial Insight
          </p>

          <p className="mt-3 text-white text-lg leading-relaxed">

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