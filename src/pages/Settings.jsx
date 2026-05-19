import { useContext } from "react"

import {
  FiMoon,
  FiSun,
  FiUser,
  FiBell,
  FiShield,
} from "react-icons/fi"

import { ThemeContext }
  from "../context/ThemeContext"

function Settings() {

  const {
    theme,
    toggleTheme,
  } = useContext(ThemeContext)

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Settings
        </h1>

        <p className="text-slate-500 dark:text-white/50 mt-2">
          Manage your preferences and app settings
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-6 transition-all duration-300">

          <div className="flex items-center gap-4 mb-6">

            <div className="p-4 rounded-2xl bg-violet-500/20 text-violet-400 text-2xl">
              <FiUser />
            </div>

            <div>

              <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
                Profile
              </h2>

              <p className="text-slate-500 dark:text-white/50 text-sm mt-1">
                Personal account information
              </p>

            </div>

          </div>

          <div className="space-y-4">

            <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-4 border border-black/10 dark:border-white/10">

              <p className="text-slate-500 dark:text-white/50 text-sm">
                Name
              </p>

              <h3 className="text-slate-900 dark:text-white font-semibold mt-1">
                Aryan Khatri
              </h3>

            </div>

            <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-4 border border-black/10 dark:border-white/10">

              <p className="text-slate-500 dark:text-white/50 text-sm">
                Email
              </p>

              <h3 className="text-slate-900 dark:text-white font-semibold mt-1">
                aryan@example.com
              </h3>

            </div>

          </div>

        </div>

        <div className="space-y-6">

          <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-6 transition-all duration-300">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-slate-900 dark:text-white text-xl font-bold">
                  Theme Mode
                </h2>

                <p className="text-slate-500 dark:text-white/50 text-sm mt-1">
                  Switch between dark and light theme
                </p>

              </div>

              <button
                onClick={toggleTheme}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white hover:scale-105 transition-all"
              >

                {theme === "dark"
                  ? <FiSun size={22} />
                  : <FiMoon size={22} />
                }

              </button>

            </div>

          </div>

          <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-6 transition-all duration-300">

            <div className="flex items-center gap-4">

              <div className="p-4 rounded-2xl bg-green-500/20 text-green-400 text-2xl">
                <FiBell />
              </div>

              <div>

                <h2 className="text-slate-900 dark:text-white text-xl font-bold">
                  Notifications
                </h2>

                <p className="text-slate-500 dark:text-white/50 text-sm mt-1">
                  Transaction alerts enabled
                </p>

              </div>

            </div>

          </div>

          <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-6 transition-all duration-300">

            <div className="flex items-center gap-4">

              <div className="p-4 rounded-2xl bg-red-500/20 text-red-400 text-2xl">
                <FiShield />
              </div>

              <div>

                <h2 className="text-slate-900 dark:text-white text-xl font-bold">
                  Security
                </h2>

                <p className="text-slate-500 dark:text-white/50 text-sm mt-1">
                  Your local data is securely stored
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Settings