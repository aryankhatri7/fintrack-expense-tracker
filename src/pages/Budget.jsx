import {
  useContext,
  useState,
  useEffect,
} from "react"

import { TransactionContext }
  from "../context/TransactionContext"

function Budget() {

  const { transactions } =
    useContext(TransactionContext)

  const [totalBudget, setTotalBudget] =
    useState(() => {

      const savedBudget =
        localStorage.getItem("budget")

      return savedBudget
        ? Number(savedBudget)
        : 5000

    })

  // Total Expenses
  const spent = transactions
    .filter(
      (item) => item.type === "expense"
    )
    .reduce(
      (total, item) =>
        total + item.amount,
      0
    )

  // Save Budget
  useEffect(() => {

    localStorage.setItem(
      "budget",
      totalBudget
    )

  }, [totalBudget])

  const remaining =
    totalBudget - spent

  const progress =
    totalBudget > 0
      ? (spent / totalBudget) * 100
      : 0

  const dailyAverage =
    (spent / 30).toFixed(0)

  const remainingPercent =
    Math.max(0, 100 - progress).toFixed(0)

  const safeToSpend =
    (remaining / 30).toFixed(0)

  return (

    <div className="space-y-6 md:space-y-8">

      {/* Header */}
      <div>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Budget
        </h1>

        <p className="text-sm md:text-base text-slate-500 dark:text-white/50 mt-2">
          Track your monthly budget and expenses
        </p>

      </div>

      {/* Main Card */}
      <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-5 md:p-8 transition-all duration-300">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          {/* Budget Input */}
          <div className="min-w-0">

            <p className="text-slate-500 dark:text-white/50 text-sm">
              Monthly Budget
            </p>

            <input
              type="number"
              value={totalBudget}
              onChange={(e) =>
                setTotalBudget(
                  Number(e.target.value)
                )
              }
              className="bg-transparent text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold mt-2 outline-none w-full"
            />

          </div>

          {/* Remaining */}
          <div className="lg:text-right">

            <p className="text-slate-500 dark:text-white/50 text-sm">
              Remaining
            </p>

            <h2 className="text-green-400 text-3xl sm:text-4xl font-bold mt-2 break-words">
              ${remaining.toLocaleString()}
            </h2>

          </div>

        </div>

        {/* Progress */}
        <div className="mt-8 md:mt-10">

          <div className="flex items-center justify-between mb-3 gap-4">

            <p className="text-slate-500 dark:text-white/60 text-sm md:text-base">
              Budget Usage
            </p>

            <p className="text-slate-900 dark:text-white font-semibold whitespace-nowrap">
              {progress.toFixed(0)}%
            </p>

          </div>

          <div className="w-full h-4 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">

            <div
              className={`h-full rounded-full transition-all duration-500 ${
                progress < 50
                  ? "bg-green-500"
                  : progress < 80
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
              style={{
                width: `${Math.min(progress, 100)}%`,
              }}
            />

          </div>

        </div>

        {/* Warning */}
        {progress >= 100 && (

          <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-5 mt-8">

            <h3 className="text-red-400 text-xl md:text-2xl font-bold">
              Budget Limit Exceeded
            </h3>

            <p className="text-red-300 mt-2 text-sm md:text-base">
              Your expenses have crossed your monthly budget.
            </p>

          </div>

        )}

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8">

          <div className="bg-slate-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-5">

            <p className="text-slate-500 dark:text-white/50 text-sm">
              Daily Average
            </p>

            <h3 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold mt-2">
              ${dailyAverage}
            </h3>

          </div>

          <div className="bg-slate-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-5">

            <p className="text-slate-500 dark:text-white/50 text-sm">
              Remaining %
            </p>

            <h3 className="text-violet-400 text-2xl md:text-3xl font-bold mt-2">
              {remainingPercent}%
            </h3>

          </div>

          <div className="bg-slate-50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-5">

            <p className="text-slate-500 dark:text-white/50 text-sm">
              Safe Daily Spend
            </p>

            <h3 className="text-green-400 text-2xl md:text-3xl font-bold mt-2">
              ${safeToSpend}
            </h3>

          </div>

        </div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10">

          <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-5 border border-black/10 dark:border-white/10">

            <p className="text-slate-500 dark:text-white/50 text-sm">
              Total Spent
            </p>

            <h3 className="text-red-400 text-2xl md:text-3xl font-bold mt-2">
              ${spent.toLocaleString()}
            </h3>

          </div>

          <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-5 border border-black/10 dark:border-white/10">

            <p className="text-slate-500 dark:text-white/50 text-sm">
              Savings
            </p>

            <h3 className="text-green-400 text-2xl md:text-3xl font-bold mt-2">
              ${remaining.toLocaleString()}
            </h3>

          </div>

          <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-5 border border-black/10 dark:border-white/10">

            <p className="text-slate-500 dark:text-white/50 text-sm">
              Status
            </p>

            <h3
              className={`text-2xl md:text-3xl font-bold mt-2 ${
                progress < 50
                  ? "text-green-400"
                  : progress < 80
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              {progress < 50
                ? "Healthy"
                : progress < 80
                ? "Warning"
                : "Critical"}
            </h3>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Budget