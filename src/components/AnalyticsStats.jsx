import { useContext } from "react"

import {
  FiTrendingUp,
  FiTrendingDown,
  FiActivity,
  FiTarget,
} from "react-icons/fi"

import { TransactionContext }
  from "../context/TransactionContext"

import { formatCurrency }
  from "../utils/formatCurrency"
function AnalyticsStats() {
const { transactions } =
  useContext(TransactionContext)

  const income =
  transactions
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
  transactions
    .filter(
      (item) =>
        item.type === "expense"
    )
    .reduce(
      (sum, item) =>
        sum + item.amount,
      0
    )

    const savingsRate =
  income === 0
    ? 0
    : Math.round(
        ((income - expense) /
          income) *
          100
      )

      const avgWeeklySpend =
  expense === 0
    ? 0
    : Math.round(expense / 4.345)

  const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

const dayTotals = {}

transactions.forEach((item) => {

  if (item.type !== "expense")
    return

  const day =
    days[
      new Date(
        item.createdAt
      ).getDay()
    ]

  dayTotals[day] =
    (dayTotals[day] || 0) +
    item.amount

})

let highestDay = "N/A"

let maxExpense = 0

Object.entries(dayTotals).forEach(
  ([day, amount]) => {

    if (amount > maxExpense) {

      maxExpense = amount

      highestDay = day

    }

  }
)
const currentMonth =
  new Date().getMonth()

const currentYear =
  new Date().getFullYear()

const currentMonthExpense =
  transactions
    .filter((item) => {

      const date =
        new Date(item.createdAt)

      return (
        item.type === "expense" &&
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      )

    })
    .reduce(
      (sum, item) =>
        sum + item.amount,
      0
    )

const previousMonthExpense =
  transactions
    .filter((item) => {

      const date =
        new Date(item.createdAt)

      return (
        item.type === "expense" &&
        date.getMonth() ===
          currentMonth - 1 &&
        date.getFullYear() ===
          currentYear
      )

    })
    .reduce(
      (sum, item) =>
        sum + item.amount,
      0
    )

const monthlyGrowth =
  previousMonthExpense === 0
    ? 0
    : Math.round(
        ((currentMonthExpense -
          previousMonthExpense) /
          previousMonthExpense) *
          100
      )

const stats = [
  {
    title: "Monthly Growth",
    value: `${monthlyGrowth}%`,
    icon: <FiTrendingUp />,
    color:
      "bg-green-500/20 text-green-400",
  },

  {
    title: "Highest Spending",
    value: highestDay,
    icon: <FiTrendingDown />,
    color:
      "bg-red-500/20 text-red-400",
  },

  {
    title: "Savings Rate",
    value: `${savingsRate}%`,
    icon: <FiTarget />,
    color:
      "bg-violet-500/20 text-violet-400",
  },

  {
    title: "Avg Weekly Spend",
    value: formatCurrency(avgWeeklySpend),
    icon: <FiActivity />,
    color:
      "bg-blue-500/20 text-blue-400",
  },
]
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">

      {stats.map((item) => (

        <div
          key={item.title}
          className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-5 md:p-6 hover:scale-[1.02] transition-all duration-300 shadow-sm dark:shadow-none"
        >

          <div className="flex items-center justify-between gap-4">

            <div className="min-w-0">

              <p className="text-slate-500 dark:text-white/50 text-sm">
                {item.title}
              </p>

              <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold mt-2 break-words">
                {item.value}
              </h2>

            </div>

            <div
              className={`p-3 md:p-4 rounded-2xl text-xl md:text-2xl shrink-0 ${item.color}`}
            >
              {item.icon}
            </div>

          </div>

        </div>

      ))}

    </div>

  )
}

export default AnalyticsStats