import { FiTarget } from "react-icons/fi";

function BudgetCard() {
  const progress = 72;

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
        hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]
      "
    >
      {/* Glow */}
      <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-indigo-400/20 blur-2xl" />

      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
        <FiTarget size={22} />
      </div>

      {/* Title */}
      <p className="mt-5 text-sm font-medium text-slate-500 dark:text-slate-400">
        Monthly Budget
      </p>

      {/* Amount */}
      <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        ₹75,000
      </h3>

      {/* Progress */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500 dark:text-slate-400">
            Used
          </span>

          <span className="font-semibold text-slate-900 dark:text-white">
            {progress}%
          </span>
        </div>

        <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div
            className="h-full rounded-full bg-indigo-500 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default BudgetCard;