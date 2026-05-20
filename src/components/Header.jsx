import {
  FiBell,
  FiSearch,
  FiMenu,
} from "react-icons/fi"

function Header({
  setSidebarOpen,
}) {

  return (

    <header className="flex items-center justify-between gap-3 md:gap-4 mb-8">

      {/* Left Side */}
      <div className="flex items-center gap-3 md:gap-4 min-w-0">

        <button
          onClick={() =>
            setSidebarOpen(true)
          }
          className="lg:hidden p-3 rounded-2xl bg-violet-600 text-white shadow-lg shrink-0"
        >

          <FiMenu size={22} />

        </button>

        <div className="min-w-0">

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white transition-all duration-300 truncate">
            Dashboard
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-500 dark:text-white/50 mt-1 transition-all duration-300 truncate">
            Track your finances easily
          </p>

        </div>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2 md:gap-4 shrink-0">

        {/* Search */}
        <div className="hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-300 bg-black/[0.03] dark:bg-white/5 border-black/10 dark:border-white/10">

          <FiSearch className="text-slate-500 dark:text-white/50" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 w-40 lg:w-auto"
          />

        </div>

        {/* Notification */}
        <button className="p-2.5 md:p-3 rounded-2xl border transition-all duration-300 hover:scale-105 bg-black/[0.03] dark:bg-white/5 border-black/10 dark:border-white/10 text-slate-700 dark:text-white">

          <FiBell size={18} />

        </button>

        {/* Profile */}
        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-10 h-10 md:w-11 md:h-11 rounded-full border border-black/10 dark:border-white/10 object-cover"
        />

      </div>

    </header>

  )
}

export default Header