import {
  FiBell,
  FiSearch,
  FiMenu,
  FiUser,
  FiSettings,
  FiChevronDown,
  FiLogOut,
} from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useRef, useEffect } from "react";
function Header({ setSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, logout } = useAuth();
 
  const [profileOpen, setProfileOpen] = useState(false);

const profileRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  useEffect(() => {
  function handleClickOutside(event) {
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target)
    ) {
      setProfileOpen(false);
    }
  }

  document.addEventListener(
    "mousedown",
    handleClickOutside
  );

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

  const pageData = {
    "/": {
      title: "Dashboard",
      subtitle: "Track your finances easily",
    },

    "/analytics": {
      title: "Analytics",
      subtitle: "Financial insights and spending overview",
    },

    "/transactions": {
      title: "Transactions",
      subtitle: "Manage and track your financial activity",
    },

    "/budget": {
      title: "Budget",
      subtitle: "Track your monthly budget and expenses",
    },

    "/settings": {
      title: "Settings",
      subtitle: "Manage your preferences and app settings",
    },
  };

  const currentPage = pageData[location.pathname];

  return (
    <header className="flex items-center justify-between gap-3 md:gap-4 mb-8">

      {/* Left Side */}
      <div className="flex items-center gap-3 md:gap-4 min-w-0">

        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-3 rounded-2xl bg-violet-600 text-white shadow-lg shrink-0"
        >
          <FiMenu size={22} />
        </button>

        <div className="min-w-0">
          {currentPage && (
            <>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white transition-all duration-300 truncate">
                {currentPage.title}
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-slate-500 dark:text-white/50 mt-1 transition-all duration-300 truncate">
                {currentPage.subtitle}
              </p>
            </>
          )}
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

       <div
  ref={profileRef}
  className="relative"
>
  <button
    onClick={() => setProfileOpen((prev) => !prev)}
    className="flex items-center gap-3 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 px-3 py-2 hover:bg-black/[0.05] dark:hover:bg-white/10 transition-all"
  >
    {user?.picture ? (
      <img
        src={user.picture}
        alt={user.name}
        className="w-11 h-11 rounded-full object-cover"
      />
    ) : (
      <div className="w-11 h-11 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold">
        {user?.name?.charAt(0).toUpperCase()}
      </div>
    )}

    <div className="flex items-center justify-between w-full">

  <div className="hidden md:block text-left">
    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
      {user?.name}
    </h4>

    <p className="text-xs text-slate-500 dark:text-white/50">
      {user?.email}
    </p>
  </div>

  <FiChevronDown
    size={18}
    className={`hidden md:block transition-transform duration-300 ${
      profileOpen ? "rotate-180" : ""
    }`}
  />

</div>

</button>
  {profileOpen && (
  <div className="absolute right-0 mt-3 w-72 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden z-50">

    {/* User Info */}
    <div className="px-5 py-4 border-b border-black/10 dark:border-white/10">

      <div className="flex items-center gap-3">

        {user?.picture && user.picture.trim() !== "" ? (
  <img
    src={user.picture}
    alt={user.name}
    className="w-11 h-11 rounded-full object-cover"
  />
) : (
  <div className="w-11 h-11 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold">
    {user?.name?.charAt(0).toUpperCase()}
  </div>
)}

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">
            {user?.name}
          </h3>

          <p className="text-sm text-slate-500 dark:text-white/50">
            {user?.email}
          </p>
        </div>

      </div>

    </div>

    {/* Menu */}

    <button
      onClick={() => {
        navigate("/settings");
        setProfileOpen(false);
      }}
      className="w-full flex items-center gap-3 px-5 py-3 hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-left"
    >
      <FiSettings />
      Settings
    </button>
<button
  onClick={() => {
    navigate("/settings");
    setProfileOpen(false);
  }}
  className="w-full flex items-center gap-3 px-5 py-3 hover:bg-slate-100 dark:hover:bg-white/5 transition-all text-left"
>
  <FiUser />
  My Profile
</button>
    <button
      onClick={() => {
        handleLogout();
        setProfileOpen(false);
      }}
      className="w-full flex items-center gap-3 px-5 py-3 hover:bg-red-50 dark:hover:bg-red-500/10 text-red-600 transition-all text-left"
    >
      <FiLogOut />
      Logout
    </button>

  </div>
)}
</div>

      </div>

    </header>
  );
}

export default Header;