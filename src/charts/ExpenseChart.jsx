import { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  FiPieChart,
  FiTrendingUp,
} from "react-icons/fi";

import Card from "../components/ui/Card";

import { TransactionContext } from "../context/TransactionContext";
import { formatCurrency } from "../utils/formatCurrency";

const COLORS = [
  "#10B981",
  "#06B6D4",
  "#34D399",
  "#22D3EE",
  "#6EE7B7",
  "#67E8F9",
];

function ExpenseChart() {
  const { transactions } = useContext(TransactionContext);

  const expenseTransactions = transactions.filter(
    (item) => item.type === "expense"
  );

  const categoryMap = {};

  expenseTransactions.forEach((item) => {
    categoryMap[item.category] =
      (categoryMap[item.category] || 0) + item.amount;
  });

  const data = Object.keys(categoryMap)
    .map((category) => ({
      name: category,
      value: categoryMap[category],
    }))
    .sort((a, b) => b.value - a.value);

  const totalExpense = expenseTransactions.reduce(
    (sum, item) => sum + item.amount,
    0
  );

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

              <FiPieChart size={22} />

            </div>

            <div>

              <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                Expense Analytics
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Spending by category
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

          {data.length > 0 && (

            <div className="mt-4 border-t border-emerald-500/20 pt-3">

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Largest Category
              </p>

              <p className="font-semibold text-slate-900 dark:text-white">
                {data[0].name}
              </p>

            </div>

          )}

        </div>

      </div>

      {data.length === 0 ? (

        <div className="flex h-[420px] flex-col items-center justify-center text-center">

          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">

            <FiTrendingUp size={34} />

          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            No Expense Data Yet
          </h3>

          <p className="mt-3 max-w-sm leading-7 text-slate-500 dark:text-slate-400">
            Start adding expenses to visualize where your money goes every month.
          </p>

        </div>

      ) : (

        <>
          {/* Chart */}

          <div className="mt-10 h-[420px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={85}
                  outerRadius={140}
                  paddingAngle={4}
                  isAnimationActive
                  animationDuration={900}
                >

                  {data.map((entry, index) => (

                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />

                  ))}

                </Pie>

                <Tooltip
                  formatter={(value) => [
                    formatCurrency(value),
                    "Amount",
                  ]}
                  labelFormatter={(label) => label}
                  contentStyle={{
                    background: "#0F172A",
                    border: "1px solid rgba(255,255,255,.08)",
                    borderRadius: "18px",
                    color: "#fff",
                  }}
                />

              </PieChart>

            </ResponsiveContainer>

          </div>

          {/* Categories */}

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            {data.map((item, index) => {

              const percentage = (
                (item.value / totalExpense) *
                100
              ).toFixed(1);

              return (

                <div
                  key={item.name}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-3xl
                    border
                    border-slate-200/70
                    bg-white/50
                    p-5
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-emerald-300
                    hover:shadow-lg
                    dark:border-slate-700/60
                    dark:bg-slate-900/40
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="h-4 w-4 rounded-full"
                      style={{
                        backgroundColor:
                          COLORS[index % COLORS.length],
                      }}
                    />

                    <div>

                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {item.name}
                      </h3>

                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {percentage}% of expenses
                      </p>

                    </div>

                  </div>

                  <div className="text-right">

                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      {formatCurrency(item.value)}
                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </>

      )}

    </Card>
  );
}

export default ExpenseChart;