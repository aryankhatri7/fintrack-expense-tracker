import { FiArrowUpRight, FiTrendingDown } from "react-icons/fi";

function ExpenseCard() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[30px]
        border border-slate-200/70
        bg-white/80
        dark:bg-slate-900/80
        dark:border-slate-700/60
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_20px_60px_rgba(239,68,68,0.15)]
      "
    >
      {/* Glow */}
      <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-rose-400/20 blur-2xl" />

      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400">
        <FiArrowUpRight size={22} />
      </div>

      {/* Label */}
      <p className="mt-5 text-sm font-medium text-slate-500 dark:text-slate-400">
        Total Expenses
      </p>

      {/* Amount */}
      <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        ₹18,200
      </h3>

      {/* Trend */}
      <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-700 dark:bg-rose-500/10 dark:text-rose-300">
        <FiTrendingDown size={14} />
        +4.1%
      </div>
    </div>
  );
}

export default ExpenseCard;