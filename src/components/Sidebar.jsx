import {
  FiHome,
  FiPieChart,
  FiCreditCard,
  FiDollarSign,
  FiSettings,
  FiX,
} from "react-icons/fi"

import {
  NavLink,
} from "react-router-dom"

const navItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: <FiHome />,
  },

  {
    name: "Analytics",
    path: "/analytics",
    icon: <FiPieChart />,
  },

  {
    name: "Transactions",
    path: "/transactions",
    icon: <FiCreditCard />,
  },

  {
    name: "Budget",
    path: "/budget",
    icon: <FiDollarSign />,
  },

  {
    name: "Settings",
    path: "/settings",
    icon: <FiSettings />,
  },
]

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {

  return (

    <>

      {/* Overlay */}
      <div
        onClick={() =>
          setSidebarOpen(false)
        }
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 lg:hidden ${
          sidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50 w-[280px] sm:w-72 min-h-screen p-5 md:p-6 border-r transition-all duration-300
        
        bg-white dark:bg-slate-900
        border-black/10 dark:border-white/10
        
        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >

        {/* Logo */}
        <div className="flex items-center justify-between mb-8 md:mb-10">

          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
            FinTrack
          </h1>

          {/* Close Button */}
          <button
            onClick={() =>
              setSidebarOpen(false)
            }
            className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all"
          >

            <FiX size={24} />

          </button>

        </div>

        {/* Navigation */}
        <nav className="space-y-2 md:space-y-3">

          {navItems.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              onClick={() =>
                setSidebarOpen(false)
              }

              className={({ isActive }) =>
                `flex items-center gap-4 p-3 md:p-4 rounded-2xl transition-all duration-300 font-medium text-sm md:text-base
                
                ${
                  isActive
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-500/20"
                    : "text-slate-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
                }`
              }
            >

              <span className="text-lg md:text-xl shrink-0">
                {item.icon}
              </span>

              <span className="truncate">
                {item.name}
              </span>

            </NavLink>

          ))}

        </nav>

      </aside>

    </>

  )
}

export default Sidebar