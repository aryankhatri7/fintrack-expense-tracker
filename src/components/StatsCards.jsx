import { useContext } from "react"

import {
  FiDollarSign,
  FiTrendingUp,
  FiTrendingDown,
} from "react-icons/fi"

import { TransactionContext }
  from "../context/TransactionContext"

  import { formatCurrency } from "../utils/formatCurrency";
import { getCurrentMonthStats } from "../utils/dashboardAnalytics";


function StatsCards() {

  const { transactions } =
    useContext(TransactionContext)
const {
  totalBalance,
  monthIncome,
  monthExpense,
  monthSavings,
} = getCurrentMonthStats(transactions);
const cards = [
  {
    title: "Net Balance",
    amount: formatCurrency(totalBalance),
    icon: <FiDollarSign />,
    color: "bg-violet-500/20 text-violet-400",
  },
  {
    title: "This Month Income",
    amount: formatCurrency(monthIncome),
    icon: <FiTrendingUp />,
    color: "bg-green-500/20 text-green-400",
  },
  {
    title: "This Month Expenses",
    amount: formatCurrency(monthExpense),
    icon: <FiTrendingDown />,
    color: "bg-red-500/20 text-red-400",
  },
  {
    title: "This Month Savings",
    amount: formatCurrency(monthSavings),
    icon: <FiDollarSign />,
    color: "bg-blue-500/20 text-blue-400",
  },
];
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">

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