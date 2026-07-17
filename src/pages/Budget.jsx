import { useContext, useEffect, useState } from "react";

import {
  FiTarget,
  FiTrendingUp,
  FiTrendingDown,
  FiCalendar,
  FiShield,
  FiPieChart,
  FiDollarSign,
} from "react-icons/fi";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

import { TransactionContext } from "../context/TransactionContext";
import { formatCurrency } from "../utils/formatCurrency";

function Budget() {

  const { transactions } = useContext(TransactionContext);

  const [totalBudget, setTotalBudget] = useState(() => {
    const saved = localStorage.getItem("budget");
    return saved ? Number(saved) : 5000;
  });

  useEffect(() => {
    localStorage.setItem("budget", totalBudget);
  }, [totalBudget]);

  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const spent = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  const remaining = totalBudget - spent;

  const progress =
    totalBudget > 0
      ? (spent / totalBudget) * 100
      : 0;

  const today = new Date();

  const currentDay = today.getDate();

  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();

  const daysRemaining =
    daysInMonth - currentDay + 1;

  const dailyAverage =
    currentDay
      ? spent / currentDay
      : 0;

  const safeDailySpend =
    daysRemaining > 0
      ? Math.max(
          0,
          remaining / daysRemaining
        )
      : 0;

  const status =
    progress < 50
      ? "Healthy"
      : progress < 80
      ? "Warning"
      : "Critical";

  const progressColor =
    progress < 50
      ? "bg-emerald-500"
      : progress < 80
      ? "bg-amber-500"
      : "bg-red-500";

  return (

    <div className="space-y-8">

      {/* Header */}

<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

  <div>

    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-500">

      Budget Planning

    </span>

    <h1 className="mt-5 text-5xl font-black tracking-tight text-slate-900 dark:text-white">

      Control Every Rupee

    </h1>

    <p className="mt-3 max-w-2xl text-slate-500 dark:text-slate-400 leading-7">

      Track your monthly budget, monitor spending and make smarter financial decisions with real-time insights.

    </p>

  </div>

</div>



{/* Hero Card */}

<div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 p-8 md:p-10 shadow-2xl">

  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

  <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />

  <div className="relative">

    <div className="flex flex-col xl:flex-row xl:justify-between gap-10">

      {/* Left */}

      <div className="flex-1">

        <p className="uppercase tracking-[5px] text-white/70 text-xs">

          MONTHLY LIMIT

        </p>

        <div className="mt-5 flex items-center">

          <span className="mr-3 text-6xl font-black text-white">

            ₹

          </span>

          <input
            type="number"
            min="0"
            value={totalBudget}
            onChange={(e) =>
              setTotalBudget(Number(e.target.value))
            }
            className="w-full bg-transparent text-6xl font-black text-white outline-none placeholder:text-white/40"
          />

        </div>

        <p className="mt-6 max-w-lg text-white/80 leading-7">

          Your budget updates instantly as you add expenses, helping you stay on track throughout the month.

        </p>

      </div>



      {/* Right Stats */}

      <div className="grid w-full gap-5 sm:grid-cols-2 xl:w-[420px]">

        <div className="rounded-3xl bg-white/15 backdrop-blur-xl p-5">

          <p className="text-sm text-white/70">

            Remaining

          </p>

          <h3 className="mt-2 text-3xl font-black text-white">

            {formatCurrency(remaining)}

          </h3>

        </div>

        <div className="rounded-3xl bg-white/15 backdrop-blur-xl p-5">

          <p className="text-sm text-white/70">

            Spent

          </p>

          <h3 className="mt-2 text-3xl font-black text-white">

            {formatCurrency(spent)}

          </h3>

        </div>

        <div className="rounded-3xl bg-white/15 backdrop-blur-xl p-5">

          <p className="text-sm text-white/70">

            Safe / Day

          </p>

          <h3 className="mt-2 text-3xl font-black text-white">

            {formatCurrency(safeDailySpend)}

          </h3>

        </div>

        <div className="rounded-3xl bg-white/15 backdrop-blur-xl p-5">

          <p className="text-sm text-white/70">

            Days Left

          </p>

          <h3 className="mt-2 text-3xl font-black text-white">

            {daysRemaining}

          </h3>

        </div>

      </div>

    </div>



    {/* Progress */}

    <div className="mt-10">

      <div className="mb-3 flex justify-between">

        <span className="font-semibold text-white">

          Budget Used

        </span>

        <span className="font-black text-white">

          {Math.min(progress,100).toFixed(0)}%

        </span>

      </div>

      <div className="h-4 overflow-hidden rounded-full bg-white/20">

        <div
          className={`${progressColor} h-full rounded-full transition-all duration-700`}
          style={{
            width: `${Math.min(progress,100)}%`,
          }}
        />

      </div>

    </div>

  </div>

</div>
    {/* Analytics */}

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <Card className="p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Total Income
            </p>

            <h3 className="mt-3 text-3xl font-black text-emerald-500">
              {formatCurrency(income)}
            </h3>

          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
            <FiTrendingUp size={24} />
          </div>

        </div>

      </Card>



      <Card className="p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Total Expenses
            </p>

            <h3 className="mt-3 text-3xl font-black text-red-500">
              {formatCurrency(spent)}
            </h3>

          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
            <FiTrendingDown size={24} />
          </div>

        </div>

      </Card>



      <Card className="p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Budget Health
            </p>

            <h3
              className={`mt-3 text-3xl font-black ${
                status === "Healthy"
                  ? "text-emerald-500"
                  : status === "Warning"
                  ? "text-amber-500"
                  : "text-red-500"
              }`}
            >
              {status}
            </h3>

          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-500">
            <FiShield size={24} />
          </div>

        </div>

      </Card>



      <Card className="p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Daily Average
            </p>

            <h3 className="mt-3 text-3xl font-black text-indigo-500">
              {formatCurrency(dailyAverage)}
            </h3>

          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500">
            <FiCalendar size={24} />
          </div>

        </div>

      </Card>

    </div>



    {/* Smart Insight */}

    <Card className="overflow-hidden p-0">

      <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white dark:from-slate-800 dark:to-slate-900">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-300">

              <FiPieChart />

              Smart Budget Insight

            </div>

            <h2 className="mt-5 text-3xl font-black">

              AI Budget Recommendation

            </h2>

            <p className="mt-4 max-w-2xl text-slate-300 leading-7">

              To comfortably finish this month within your budget,
              try to keep your daily expenses below the recommended amount.

            </p>

          </div>



          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl">

            <p className="text-sm uppercase tracking-wider text-slate-300">

              Recommended Daily Spend

            </p>

            <h2 className="mt-3 text-5xl font-black text-emerald-400">

              {formatCurrency(safeDailySpend)}

            </h2>

            <p className="mt-4 text-slate-300">

              {daysRemaining} day(s) remaining this month

            </p>

          </div>

        </div>

      </div>

    </Card>

  </div>

);

}

export default Budget;