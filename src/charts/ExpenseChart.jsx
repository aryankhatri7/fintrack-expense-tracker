import { useContext } from "react"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import { TransactionContext } from "../context/TransactionContext"

const COLORS = [
  "#8B5CF6",
  "#A78BFA",
  "#C4B5FD",
  "#DDD6FE",
]

function ExpenseChart() {

  const { transactions } =
    useContext(TransactionContext)

  const expenseTransactions =
    transactions.filter(
      (item) => item.type === "expense"
    )

  const categoryMap = {}

  expenseTransactions.forEach((item) => {

    if (categoryMap[item.category]) {

      categoryMap[item.category] += item.amount

    } else {

      categoryMap[item.category] = item.amount

    }

  })

  const data = Object.keys(categoryMap).map(
    (category) => ({
      name: category,
      value: categoryMap[category],
    })
  )

  return (
  <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-6 transition-all duration-300">

    <div className="flex items-center justify-between mb-6">

      <div>

        <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
          Expense Analytics
        </h2>

        <p className="text-slate-600 dark:text-white/50 mt-1">
          Category spending overview
        </p>

      </div>

    </div>

    <div className="h-[350px]">

      {data.length === 0 ? (

        <div className="h-full flex items-center justify-center text-slate-500 dark:text-white/50">
          No expense data available
        </div>

      ) : (

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              outerRadius={120}
              innerRadius={70}
              paddingAngle={5}
            >

              {data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />

              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      )}

    </div>

  </div>
)
}

export default ExpenseChart