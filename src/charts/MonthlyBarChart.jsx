import { useContext } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

import {
  FiBarChart2,
} from "react-icons/fi";

import Card from "../components/ui/Card";

import {
  TransactionContext,
} from "../context/TransactionContext";

import {
  formatCurrency,
} from "../utils/formatCurrency";

function MonthlyBarChart() {

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

    const monthlyExpense =
      transactions
        .filter((item) => {

          const date =
            new Date(item.createdAt);

          return (
            item.type === "expense" &&
            date.getMonth() === index &&
            date.getFullYear() === currentYear
          );

        })
        .reduce(
          (sum, item) =>
            sum + item.amount,
          0
        );

    return {
      month,
      expense: monthlyExpense,
    };

  });

  const totalExpense =
    data.reduce(
      (sum, item) =>
        sum + item.expense,
      0
    );

  const highestMonth =
    [...data].sort(
      (a, b) =>
        b.expense - a.expense
    )[0];

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

              <FiBarChart2 size={22} />

            </div>

            <div>

              <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                Monthly Spending
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Expense overview by month
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-3xl bg-emerald-500/10 px-6 py-5">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total Expenses
          </p>

          <h3 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
            {formatCurrency(totalExpense)}
          </h3>

          <div className="mt-4 border-t border-emerald-500/20 pt-3">

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Highest Month
            </p>

            <p className="font-semibold text-slate-900 dark:text-white">
              {highestMonth.month}
            </p>

          </div>

        </div>

      </div>

      {/* Chart */}

      <div className="mt-10 h-[380px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -15,
              bottom: 0,
            }}
          >

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
              formatter={(value)=>[
                formatCurrency(value),
                "Expense",
              ]}
              contentStyle={{
                background:"#0F172A",
                border:"1px solid rgba(16,185,129,.15)",
                borderRadius:"18px",
                color:"#fff",
              }}
            />

            <Bar
              dataKey="expense"
              radius={[14,14,0,0]}
            >

              {data.map((entry,index)=>(

                <Cell
                  key={index}
                  fill={
                    entry.expense>0
                    ? "#10B981"
                    : "#D1D5DB"
                  }
                />

              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Bottom Summary */}

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-3xl border border-slate-200/70 bg-white/50 p-5 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/40">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Yearly Expense
          </p>

          <h3 className="mt-2 text-2xl font-black text-emerald-500">
            {formatCurrency(totalExpense)}
          </h3>

        </div>

        <div className="rounded-3xl border border-slate-200/70 bg-white/50 p-5 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/40">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Highest Month
          </p>

          <h3 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
            {highestMonth.month}
          </h3>

        </div>

        <div className="rounded-3xl border border-slate-200/70 bg-white/50 p-5 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/40">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Average / Month
          </p>

          <h3 className="mt-2 text-2xl font-black text-emerald-600">
            {formatCurrency(totalExpense / 12)}
          </h3>

        </div>

      </div>

    </Card>

  );

}

export default MonthlyBarChart;