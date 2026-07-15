import { FiArrowUpRight, FiTrendingUp } from "react-icons/fi";

function BalanceCard() {
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
      p-7
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_30px_70px_rgba(16,185,129,0.15)]
    "
    >
      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />

      {/* Label */}
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        Total Balance
      </p>

      {/* Balance */}
      <h2 className="mt-4 text-5xl font-black tracking-tight text-slate-900 dark:text-white">
        ₹1,24,850
      </h2>

      {/* Growth Badge */}
      <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
        <FiTrendingUp />
        +12.5% this month
      </div>

      {/* Bottom Row */}
      <div className="mt-8 flex items-center justify-between">

        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400">
            Last Updated
          </p>

          <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
            Just now
          </p>
        </div>

        <button
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-emerald-500
          text-white
          transition
          hover:scale-105
        "
        >
          <FiArrowUpRight size={20} />
        </button>

      </div>

    </div>
  );
}

export default BalanceCard;