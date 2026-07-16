import {
  FiHome,
  FiPieChart,
  FiCreditCard,
  FiDollarSign,
  FiSettings,
  FiX,
  FiChevronRight,
} from "react-icons/fi";

import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Card from "./ui/Card";

const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: FiHome,
  },
  {
    name: "Analytics",
    path: "/dashboard/analytics",
    icon: FiPieChart,
  },
  {
    name: "Transactions",
    path: "/dashboard/transactions",
    icon: FiCreditCard,
  },
  {
    name: "Budget",
    path: "/dashboard/budget",
    icon: FiDollarSign,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: FiSettings,
  },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const { user } = useAuth();

  return (
    <>
      {/* Mobile Overlay */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          sidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          w-[280px]
          p-5
          transition-transform
          duration-300
          lg:sticky
          lg:top-0
          lg:h-screen
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <Card
          glow
          hover={false}
          className="flex h-full flex-col p-6"
        >
          {/* Brand */}
          <div className="flex items-start justify-between">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-lg font-bold text-white shadow-lg shadow-emerald-500/20">
                  F
                </div>

                <div>

                  <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    FinTrack
                  </h1>

                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                    Personal Finance Platform
                  </p>

                </div>

              </div>

            </div>

            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5 lg:hidden"
            >
              <FiX size={22} />
            </button>

          </div>

          {/* Navigation */}
          <nav className="mt-10 flex-1 space-y-2">

            {navItems.map((item) => {

              const Icon = item.icon;

              return (

                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `
                    group
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-4
                    py-3.5
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                        border
                        border-emerald-200/60
                        bg-gradient-to-r
                        from-emerald-500/15
                        to-cyan-500/10
                        shadow-lg
                        shadow-emerald-500/10
                        dark:border-emerald-500/20
                        `
                        : `
                        hover:bg-slate-100/80
                        dark:hover:bg-white/5
                        `
                    }
                  `
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-4">

                        <div
                          className={`
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-xl
                            transition-all

                            ${
                              isActive
                                ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/30"
                                : "bg-slate-100 text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-600 dark:bg-white/5 dark:text-slate-400 dark:group-hover:bg-emerald-500/10 dark:group-hover:text-emerald-400"
                            }
                          `}
                        >
                          <Icon size={20} />
                        </div>

                        <span
                          className={`
                            font-semibold
                            ${
                              isActive
                                ? "text-slate-900 dark:text-white"
                                : "text-slate-600 dark:text-slate-300"
                            }
                          `}
                        >
                          {item.name}
                        </span>

                      </div>

                      <FiChevronRight
                        className={`
                          transition-all
                          ${
                            isActive
                              ? "translate-x-0 text-emerald-500"
                              : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 text-slate-400"
                          }
                        `}
                      />
                    </>
                  )}
                </NavLink>

              );

            })}

          </nav>
                    {/* Bottom User Card */}
          <div className="mt-6">

            <Card
              hover={false}
              className="rounded-3xl border border-emerald-500/10 bg-gradient-to-br from-emerald-500/10 via-white/70 to-cyan-500/10 p-4 dark:from-emerald-500/10 dark:via-slate-900/70 dark:to-cyan-500/10"
            >

              <div className="flex items-center gap-3">

                {user?.picture ? (

                  <img
                    src={user.picture}
                    alt={user.name}
                    className="h-12 w-12 rounded-2xl object-cover ring-2 ring-emerald-400/20"
                  />

                ) : (

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-lg font-bold text-white shadow-lg shadow-emerald-500/20">

                    {user?.name?.charAt(0)?.toUpperCase() || "U"}

                  </div>

                )}

                <div className="min-w-0 flex-1">

                  <h3 className="truncate font-semibold text-slate-900 dark:text-white">
                    {user?.name || "Welcome"}
                  </h3>

                  <p className="truncate text-sm text-slate-500 dark:text-slate-400">
                    {user?.email || "Manage your account"}
                  </p>

                </div>

              </div>

            </Card>

          </div>

        </Card>

      </aside>

    </>
  );
}

export default Sidebar;