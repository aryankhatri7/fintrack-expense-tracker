import {
  FiDollarSign,
  FiTrendingUp,
  FiTrendingDown,
  FiTarget,
} from "react-icons/fi";

import Card from "../ui/Card";
import { formatCurrency } from "../../utils/formatCurrency";

function TransactionStats({
  totalIncome,
  totalExpense,
  netBalance,
  incomeCount,
  expenseCount,
}) {
  const savingsRate =
    totalIncome > 0
      ? ((netBalance / totalIncome) * 100).toFixed(1)
      : 0;

  const stats = [
    {
      title: "Total Balance",
      value: formatCurrency(netBalance),
      subtitle: "Current Balance",
      icon: <FiDollarSign size={22} />,
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-500",
    },
    {
      title: "Income",
      value: formatCurrency(totalIncome),
      subtitle: `${incomeCount} Transactions`,
      icon: <FiTrendingUp size={22} />,
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-500",
    },
    {
      title: "Expense",
      value: formatCurrency(totalExpense),
      subtitle: `${expenseCount} Transactions`,
      icon: <FiTrendingDown size={22} />,
      iconBg: "bg-red-500/10",
      iconColor: "text-red-500",
    },
    {
      title: "Savings Rate",
      value: `${savingsRate}%`,
      subtitle: "Income Saved",
      icon: <FiTarget size={22} />,
      iconBg: "bg-violet-500/10",
      iconColor: "text-violet-500",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <Card
          key={item.title}
          glow
          className="group p-6 hover:-translate-y-1"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {item.title}
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white">
                {item.value}
              </h2>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {item.subtitle}
              </p>
            </div>

            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg} ${item.iconColor}`}
            >
              {item.icon}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default TransactionStats;