import { useContext } from "react"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import { TransactionContext }
  from "../context/TransactionContext"

  import { formatCurrency }
  from "../utils/formatCurrency"

function WeeklySpendingChart() {

  const { transactions } =
    useContext(TransactionContext)

  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ]

  const data = days.map((day, index) => {

    const weeklyExpense =
      transactions
        .filter((item) => {

          if (item.type !== "expense")
            return false

          const date =
            new Date(item.createdAt)

          return (
            date.getDay() === index
          )

        })
        .reduce(
          (sum, item) =>
            sum + item.amount,
          0
        )

    return {
      day,
      spending: weeklyExpense,
    }

  })

  return (

    <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300">

      {/* Header */}
      <div className="mb-6">

        <h2 className="text-slate-900 dark:text-white text-xl md:text-2xl font-bold">
          Weekly Spending
        </h2>

        <p className="text-slate-600 dark:text-white/50 mt-1 text-sm md:text-base">
          Daily expense tracking overview
        </p>

      </div>

      {/* Chart */}
      <div className="h-[280px] md:h-[350px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >

            <XAxis
              dataKey="day"
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
            />

           <Tooltip
  formatter={(value) => [
    formatCurrency(value),
    "Spending",
  ]}
  contentStyle={{
    background: "#0f172a",
    border:
      "1px solid rgba(255,255,255,0.1)",
    borderRadius: "16px",
    color: "#fff",
  }}
/>

            <Line
              type="monotone"
              dataKey="spending"
              stroke="#8B5CF6"
              strokeWidth={3}
              dot={{
                r: 4,
              }}
              activeDot={{
                r: 6,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  )

}

export default WeeklySpendingChart