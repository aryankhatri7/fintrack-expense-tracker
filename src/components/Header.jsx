import {
  FiBell,
  FiSearch,
} from "react-icons/fi"

function Header() {
  return (

    <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

      <div>

        <h2 className="text-3xl font-bold text-slate-900 dark:text-white transition-all duration-300">
          Dashboard
        </h2>

        <p className="text-slate-500 dark:text-white/50 mt-1 transition-all duration-300">
          Track your finances easily
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-300 bg-black/[0.03] dark:bg-white/5 border-black/10 dark:border-white/10">

          <FiSearch className="text-slate-500 dark:text-white/50" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40"
          />

        </div>

        <button className="p-3 rounded-2xl border transition-all duration-300 hover:scale-105 bg-black/[0.03] dark:bg-white/5 border-black/10 dark:border-white/10 text-slate-700 dark:text-white">

          <FiBell size={20} />

        </button>

        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10"
        />

      </div>

    </header>
  )
}

export default Header