import { useContext } from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  FiActivity,
  FiTrendingUp,
} from "react-icons/fi";

import Card from "../components/ui/Card";

import { TransactionContext } from "../context/TransactionContext";
import { formatCurrency } from "../utils/formatCurrency";

function WeeklySpendingChart() {
  const { transactions } =
    useContext(TransactionContext);

  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  const data = days.map((day, index) => {
    const weeklyExpense =
      transactions
        .filter((item) => {
          if (item.type !== "expense")
            return false;

          const date =
            new Date(item.createdAt);

          return (
            date.getDay() === index
          );
        })
        .reduce(
          (sum, item) =>
            sum + item.amount,
          0
        );

    return {
      day,
      spending: weeklyExpense,
    };
  });

  const totalWeekly =
    data.reduce(
      (sum, item) =>
        sum + item.spending,
      0
    );

  const highestDay =
    [...data].sort(
      (a, b) =>
        b.spending - a.spending
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

              <FiActivity size={22} />

            </div>

            <div>

              <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                Weekly Spending
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Expense trend across the week
              </p>

            </div>

          </div>

        </div>

        <div className="rounded-3xl bg-emerald-500/10 px-6 py-5">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total Weekly
          </p>

          <h3 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
            {formatCurrency(totalWeekly)}
          </h3>

          <div className="mt-4 border-t border-emerald-500/20 pt-3">

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Highest Spending
            </p>

            <p className="font-semibold text-slate-900 dark:text-white">
              {highestDay.day}
            </p>

          </div>

        </div>

      </div>

      {totalWeekly === 0 ? (

        <div className="flex h-[420px] flex-col items-center justify-center text-center">

          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">

            <FiTrendingUp size={34} />

          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            No Weekly Data
          </h3>

          <p className="mt-3 max-w-sm leading-7 text-slate-500 dark:text-slate-400">
            Add some expenses to visualize your weekly spending pattern.
          </p>

        </div>

      ) : (

        <div className="mt-10 h-[420px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart
              data={data}
              margin={{
                top: 10,
                right: 20,
                left: -10,
                bottom: 0,
              }}
            >

              <CartesianGrid
                strokeDasharray="4 4"
                stroke="#CBD5E1"
                opacity={0.35}
              />

              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#94A3B8",
                  fontSize: 12,
                }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#94A3B8",
                  fontSize: 12,
                }}
                tickFormatter={(value) =>
                  `₹${value / 1000}k`
                }
              />

              <Tooltip
                formatter={(value) => [
                  formatCurrency(value),
                  "Spent",
                ]}
                contentStyle={{
                  background: "#0F172A",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: "18px",
                  color: "#fff",
                  boxShadow:
                    "0 20px 50px rgba(0,0,0,.25)",
                }}
              />

              <Line
                type="monotone"
                dataKey="spending"
                stroke="#10B981"
                strokeWidth={4}
                dot={{
                  r: 4,
                  fill: "#10B981",
                }}
                activeDot={{
                  r: 7,
                  fill: "#10B981",
                }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      )}

    </Card>
  );
}

export default WeeklySpendingChart;