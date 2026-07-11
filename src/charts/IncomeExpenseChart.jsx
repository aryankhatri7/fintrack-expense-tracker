import { useContext } from "react"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import { TransactionContext }
  from "../context/TransactionContext"
import { formatCurrency }
  from "../utils/formatCurrency"

function IncomeExpenseChart() {
const { transactions } =
  useContext(TransactionContext)
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
]

const data = months.map((month, index) => {


const monthlyTransactions =
  transactions.filter((item) => {

    const date = new Date(item.createdAt);

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
      )

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
      )

  return {
    month,
    income,
    expense,
  }

})
  return (

    <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300">

      {/* Header */}
      <div className="mb-6">

        <h2 className="text-slate-900 dark:text-white text-xl md:text-2xl font-bold">
          Income vs Expenses
        </h2>

        <p className="text-slate-600 dark:text-white/50 mt-1 text-sm md:text-base">
          Financial flow comparison
        </p>

      </div>

      {/* Chart */}
      <div className="h-[280px] md:h-[350px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
            />

            <Tooltip
  formatter={(value) => formatCurrency(value)}
  contentStyle={{
    background: "#0f172a",
    border:
      "1px solid rgba(255,255,255,0.1)",
    borderRadius: "16px",
    color: "#fff",
  }}
/>

            <Area
              type="monotone"
              dataKey="income"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={0.3}
            />

            <Area
              type="monotone"
              dataKey="expense"
              stroke="#ef4444"
              fill="#ef4444"
              fillOpacity={0.3}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>

  )
}

export default IncomeExpenseChart