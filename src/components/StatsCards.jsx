import { useContext } from "react"

import {
  FiDollarSign,
  FiTrendingUp,
  FiTrendingDown,
} from "react-icons/fi"

import { TransactionContext }
  from "../context/TransactionContext"
import { formatCurrency }
  from "../utils/formatCurrency"
function StatsCards() {

  const { transactions } =
    useContext(TransactionContext)

  const income = transactions
    .filter((item) =>
      item.type === "income"
    )
    .reduce(
      (acc, item) =>
        acc + item.amount,
      0
    )

  const expenses = transactions
    .filter((item) =>
      item.type === "expense"
    )
    .reduce(
      (acc, item) =>
        acc + item.amount,
      0
    )

  const totalBalance =
    income - expenses

const cards = [
  {
    title: "Total Balance",
    amount: formatCurrency(totalBalance),
    icon: <FiDollarSign />,
    color:
      "bg-violet-500/20 text-violet-400",
  },

  {
    title: "Income",
    amount: formatCurrency(income),
    icon: <FiTrendingUp />,
    color:
      "bg-green-500/20 text-green-400",
  },

  {
    title: "Expenses",
    amount: formatCurrency(expenses),
    icon: <FiTrendingDown />,
    color:
      "bg-red-500/20 text-red-400",
  },
]
  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-3xl p-5 md:p-6 border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-white dark:bg-white/5 border-black/10 dark:border-white/10"
        >

          <div className="flex items-center justify-between gap-4">

            <div className="min-w-0">

              <p className="text-slate-500 dark:text-white/60 text-sm">
                {card.title}
              </p>

              <h2 className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold mt-2 break-words">
                {card.amount}
              </h2>

            </div>

            <div
              className={`p-3 md:p-4 rounded-2xl text-xl md:text-2xl shrink-0 ${card.color}`}
            >
              {card.icon}
            </div>

          </div>

        </div>

      ))}

    </div>

  )
}

export default StatsCards