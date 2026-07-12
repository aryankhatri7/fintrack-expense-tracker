import { useContext, useState } from "react"

import {
  FiMoon,
  FiSun,
  FiUser,
  FiBell,
  FiShield,
} from "react-icons/fi"

import { ThemeContext }
  from "../context/ThemeContext"

  import { useAuth } from "../context/AuthContext"

  import EditProfileModal from "../components/EditProfileModal"
import ChangePasswordModal from "../components/ChangePasswordModal";
function Settings() {

  const {
    theme,
    toggleTheme,
  } = useContext(ThemeContext)

  const { user } = useAuth()

  const [openProfileModal, setOpenProfileModal] = useState(false)
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  return (

    <div className="space-y-6 md:space-y-8">

      
      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">

        {/* Profile Card */}
        <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300">

          <div className="flex items-center gap-4 mb-6">

            <div className="p-3 md:p-4 rounded-2xl bg-violet-500/20 text-violet-400 text-xl md:text-2xl shrink-0">
              <FiUser />
            </div>

            <div className="min-w-0">

              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Profile
              </h2>

              <p className="text-sm text-slate-500 dark:text-white/50 mt-1">
                Personal account information
              </p>

            </div>

          </div>

          <div className="space-y-4">

            <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-4 border border-black/10 dark:border-white/10">

              <p className="text-sm text-slate-500 dark:text-white/50">
                Name
              </p>

              <h3 className="text-slate-900 dark:text-white font-semibold mt-1 break-words">
  {user?.name || "Loading..."}
</h3>

            </div>

            <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-4 border border-black/10 dark:border-white/10">

              <p className="text-sm text-slate-500 dark:text-white/50">
                Email
              </p>

              <h3 className="text-slate-900 dark:text-white font-semibold mt-1 break-words">
  {user?.email || "Loading..."}
</h3>

            </div>
<div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-4 border border-black/10 dark:border-white/10">

  <p className="text-sm text-slate-500 dark:text-white/50">
    Member Since
  </p>

  <h3 className="text-slate-900 dark:text-white font-semibold mt-1 break-words">
    {user?.createdAt
      ? new Date(user.createdAt).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "Loading..."}
  </h3>

</div>
<button
  onClick={() => setOpenProfileModal(true)}
  className="w-full mt-6 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-2xl transition-all duration-300"
>
  Edit Profile
</button>
<button
  onClick={() => setOpenPasswordModal(true)}
  className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-2xl transition-all duration-300"
>
  Change Password
</button>
          </div>

        </div>

        {/* Right Section */}
        <div className="space-y-6">

          {/* Theme */}
          <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300">

            <div className="flex items-center justify-between gap-4">

              <div className="min-w-0">

                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                  Theme Mode
                </h2>

                <p className="text-sm text-slate-500 dark:text-white/50 mt-1">
                  Switch between dark and light theme
                </p>

              </div>

              <button
                onClick={toggleTheme}
                className="shrink-0 p-3 md:p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white hover:scale-105 transition-all"
              >

                {theme === "dark"
                  ? <FiSun size={22} />
                  : <FiMoon size={22} />
                }

              </button>

            </div>

          </div>

          {/* Notifications */}
          <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300">

            <div className="flex items-start gap-4">

              <div className="p-3 md:p-4 rounded-2xl bg-green-500/20 text-green-400 text-xl md:text-2xl shrink-0">
                <FiBell />
              </div>

              <div className="min-w-0">

                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                  Notifications
                </h2>

                <p className="text-sm text-slate-500 dark:text-white/50 mt-1">
                  Transaction alerts enabled
                </p>

              </div>

            </div>

          </div>

          {/* Security */}
          <div className="bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300">

            <div className="flex items-start gap-4">

              <div className="p-3 md:p-4 rounded-2xl bg-red-500/20 text-red-400 text-xl md:text-2xl shrink-0">
                <FiShield />
              </div>

              <div className="min-w-0">

                <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                  Security
                </h2>

                <p className="text-sm text-slate-500 dark:text-white/50 mt-1">
                  Your local data is securely stored
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
<EditProfileModal
  isOpen={openProfileModal}
  onClose={() => setOpenProfileModal(false)}
/>
<ChangePasswordModal
  isOpen={openPasswordModal}
  onClose={() => setOpenPasswordModal(false)}
/>
    </div>

  )
}

export default Settings