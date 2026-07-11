import { useContext } from "react"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

import { TransactionContext }
  from "../context/TransactionContext"

  import { formatCurrency }
  from "../utils/formatCurrency"

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

  const totalExpense = expenseTransactions.reduce(
    (sum, item) => sum + item.amount,
    0
  )

  return (

    <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-slate-900 dark:text-white text-xl md:text-2xl font-bold">
            Expense Analytics
          </h2>

          <div className="mt-2">

            <p className="text-slate-600 dark:text-white/50 text-sm">
              Category spending overview
            </p>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
              {formatCurrency(totalExpense)}
            </h3>

          </div>

        </div>

      </div>

      {/* Chart */}
      <div>

        {data.length === 0 ? (

          <div className="h-full flex items-center justify-center text-slate-500 dark:text-white/50 text-sm md:text-base">
            No expense data available
          </div>

        ) : (

          <>

            <div className="h-[280px] md:h-[350px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
  data={data}
  dataKey="value"
  nameKey="name"
  outerRadius={100}
  innerRadius={60}
  paddingAngle={4}
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

                 <Tooltip
  formatter={(value) => [
    formatCurrency(value),
    "Amount",
  ]}
  contentStyle={{
    background: "#0f172a",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "16px",
    color: "#fff",
  }}
/>

                </PieChart>

              </ResponsiveContainer>

            </div>

            <div className="mt-6 space-y-3">

              {data.map((item, index) => (

                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor:
                          COLORS[index % COLORS.length],
                      }}
                    />

                    <span className="text-slate-700 dark:text-white/80">
                      {item.name}
                    </span>

                  </div>

                  <span className="font-semibold text-slate-900 dark:text-white">
                    {formatCurrency(item.value)}
                  </span>

                </div>

              ))}

            </div>

          </>

        )}

      </div>

    </div>

  )

}

export default ExpenseChart