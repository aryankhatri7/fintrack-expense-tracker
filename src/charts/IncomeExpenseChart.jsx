import { useContext } from "react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  FiTrendingUp,
} from "react-icons/fi";

import Card from "../components/ui/Card";

import {
  TransactionContext,
} from "../context/TransactionContext";

import {
  formatCurrency,
} from "../utils/formatCurrency";

function IncomeExpenseChart() {

  const { transactions } =
    useContext(TransactionContext);

  const currentYear =
    new Date().getFullYear();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = months.map((month, index) => {

    const monthlyTransactions =
      transactions.filter((item) => {

        const date =
          new Date(item.createdAt);

        return (
          date.getMonth() === index &&
          date.getFullYear() === currentYear
        );

      });

    const income =
      monthlyTransactions
        .filter(
          (item) =>
            item.type === "income"
        )
        .reduce(
          (sum, item) =>
            sum + item.amount,
          0
        );

    const expense =
      monthlyTransactions
        .filter(
          (item) =>
            item.type === "expense"
        )
        .reduce(
          (sum, item) =>
            sum + item.amount,
          0
        );

    return {
      month,
      income,
      expense,
    };

  });

  const totalIncome =
    data.reduce(
      (sum, item) =>
        sum + item.income,
      0
    );

  const totalExpense =
    data.reduce(
      (sum, item) =>
        sum + item.expense,
      0
    );

  const savings =
    totalIncome - totalExpense;

  return (

    <Card
      glow
      className="p-6 lg:p-8"
    >

      {/* Header */}

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">

              <FiTrendingUp size={22} />

            </div>

            <div>

              <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                Income vs Expenses
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Monthly cash flow
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-3xl bg-emerald-500/10 px-6 py-5">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Net Savings
          </p>

          <h3 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
            {formatCurrency(savings)}
          </h3>

        </div>

      </div>

      {/* Chart */}

      <div className="mt-10 h-[400px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -15,
              bottom: 0,
            }}
          >

            <defs>

              <linearGradient
                id="income"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#10B981"
                  stopOpacity={0.35}
                />

                <stop
                  offset="100%"
                  stopColor="#10B981"
                  stopOpacity={0}
                />

              </linearGradient>

              <linearGradient
                id="expense"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#F97316"
                  stopOpacity={0.30}
                />

                <stop
                  offset="100%"
                  stopColor="#F97316"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#D1FAE5"
              opacity={0.35}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill:"#94A3B8",
                fontSize:12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill:"#94A3B8",
                fontSize:12,
              }}
            />

            <Tooltip
              formatter={(value)=>
                formatCurrency(value)
              }
              contentStyle={{
                background:"#0F172A",
                border:"1px solid rgba(16,185,129,.15)",
                borderRadius:"18px",
                color:"#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="income"
              stroke="#10B981"
              strokeWidth={4}
              fill="url(#income)"
            />

            <Area
              type="monotone"
              dataKey="expense"
              stroke="#F97316"
              strokeWidth={4}
              fill="url(#expense)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      {/* Summary */}

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-3xl border border-slate-200/70 bg-white/50 p-5 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/40">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total Income
          </p>

          <h3 className="mt-2 text-2xl font-black text-emerald-500">
            {formatCurrency(totalIncome)}
          </h3>

        </div>

        <div className="rounded-3xl border border-slate-200/70 bg-white/50 p-5 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/40">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total Expenses
          </p>

          <h3 className="mt-2 text-2xl font-black text-orange-500">
            {formatCurrency(totalExpense)}
          </h3>

        </div>

        <div className="rounded-3xl border border-slate-200/70 bg-white/50 p-5 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/40">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Net Savings
          </p>

          <h3 className="mt-2 text-2xl font-black text-emerald-600">
            {formatCurrency(savings)}
          </h3>

        </div>

      </div>

    </Card>

  );

}

export default IncomeExpenseChart;