import { useContext } from "react";
import {
  FiDollarSign,
  FiTrendingUp,
  FiTrendingDown,
  FiArrowUpRight,
} from "react-icons/fi";

import Card from "./ui/Card";

import { TransactionContext } from "../context/TransactionContext";
import { formatCurrency } from "../utils/formatCurrency";
import { getCurrentMonthStats } from "../utils/dashboardAnalytics";

function StatsCards() {
  const { transactions } = useContext(TransactionContext);

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
      accent: "emerald",
      growth: "+12%",
    },
    {
      title: "Income",
      amount: formatCurrency(monthIncome),
      icon: <FiTrendingUp />,
      accent: "cyan",
      growth: "+8%",
    },
    {
      title: "Expenses",
      amount: formatCurrency(monthExpense),
      icon: <FiTrendingDown />,
      accent: "rose",
      growth: "-3%",
    },
    {
      title: "Savings",
      amount: formatCurrency(monthSavings),
      icon: <FiDollarSign />,
      accent: "emerald",
      growth: "+15%",
    },
  ];

  const accentClasses = {
    emerald: {
      icon: "bg-emerald-500/10 text-emerald-500",
      badge: "bg-emerald-500/10 text-emerald-500",
      button: "bg-emerald-500 hover:bg-emerald-600",
    },
    cyan: {
      icon: "bg-cyan-500/10 text-cyan-500",
      badge: "bg-cyan-500/10 text-cyan-500",
      button: "bg-cyan-500 hover:bg-cyan-600",
    },
    rose: {
      icon: "bg-rose-500/10 text-rose-500",
      badge: "bg-rose-500/10 text-rose-500",
      button: "bg-rose-500 hover:bg-rose-600",
    },
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-4">
      {cards.map((card) => {
        const style = accentClasses[card.accent];

        return (
          <Card
            key={card.title}
            glow
            className="
        group
        p-7
        hover:-translate-y-2
        hover:shadow-[0_35px_80px_rgba(16,185,129,0.15)]
    "
>
            <div className="flex items-start justify-between">

  <div>

    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
      {card.title}
    </p>

    <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 dark:text-white">
      {card.amount}
    </h2>

  </div>

  <div
    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.icon}`}
  >
    {card.icon}
  </div>

</div>

<div className="mt-8 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

<div className="mt-6 flex items-center justify-between">

  <div>

    <div
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}
    >
      {card.growth}
    </div>

    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
      Compared with last month
    </p>

  </div>

  <button
    className={`flex h-11 w-11 items-center justify-center rounded-2xl text-white transition hover:scale-105 ${style.button}`}
  >
    <FiArrowUpRight />
  </button>

</div>

          </Card>
        );
      })}
    </div>
  );
}

export default StatsCards;