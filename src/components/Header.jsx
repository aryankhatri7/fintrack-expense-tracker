import {
  FiBell,
  FiMenu,
  FiUser,
  FiSettings,
  FiChevronDown,
  FiLogOut,
} from "react-icons/fi";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  useState,
  useRef,
  useEffect,
} from "react";

import { useAuth } from "../context/AuthContext";

import Card from "./ui/Card";
import Button from "./ui/Button";
import SearchInput from "./ui/SearchInput";

function Header({ setSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [profileOpen, setProfileOpen] =
    useState(false);

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

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const pageData = {
    "/dashboard": {
      title: "Dashboard",
      subtitle:
        "Track your finances with confidence",
    },

    "/dashboard/analytics": {
      title: "Analytics",
      subtitle:
        "Financial insights and spending trends",
    },

    "/dashboard/transactions": {
      title: "Transactions",
      subtitle:
        "Manage your financial activity",
    },

    "/dashboard/budget": {
      title: "Budget",
      subtitle:
        "Stay in control of your monthly spending",
    },

    "/dashboard/settings": {
      title: "Settings",
      subtitle:
        "Manage your account preferences",
    },
  };

  const currentPage =
    pageData[location.pathname];

  return (
    <Card
      hover={false}
      className="mb-8 px-6 py-5"
    >
      <div className="flex items-center justify-between gap-6">

        {/* Left */}

        <div className="flex items-center gap-4 min-w-0">

          <Button
            variant="primary"
            size="sm"
            className="lg:hidden !px-0 w-10"
            onClick={() =>
              setSidebarOpen(true)
            }
          >
            <FiMenu size={20} />
          </Button>

          <div className="min-w-0">

            <h1 className="truncate text-2xl md:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
              {currentPage?.title}
            </h1>

            <p className="mt-1 hidden sm:block text-sm text-slate-500 dark:text-slate-400">
              {currentPage?.subtitle}
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          <div className="hidden lg:block w-80">

            <SearchInput
  placeholder={
    location.pathname === "/dashboard/transactions"
      ? "Search transactions..."
      : location.pathname === "/dashboard/settings"
      ? "Search settings..."
      : location.pathname === "/dashboard/analytics"
      ? "Search analytics..."
      : location.pathname === "/dashboard/budget"
      ? "Search budgets..."
      : "Search FinTrack..."
  }
/>

          </div>

          <Button
  variant="secondary"
  size="sm"
  className="relative !px-0 w-11"
>
  <FiBell size={18} />

  <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900" />
</Button>

          <div
            ref={profileRef}
            className="relative"
          >

            <button
  onClick={() =>
    setProfileOpen((v) => !v)
  }
  className="
    flex
    items-center
    gap-3
    rounded-2xl
    border
    border-slate-200/70
    dark:border-slate-700/60
    bg-white/80
    dark:bg-slate-900/80
    backdrop-blur-xl
    px-3
    py-2
    transition-all
    hover:border-emerald-400
hover:shadow-lg
hover:shadow-emerald-500/10
  "
>

{user?.picture ? (
                <img
                  src={user.picture}
                  alt={user.name}
                  className="h-11 w-11 rounded-full object-cover border border-emerald-400/20"
                />
              ) : (
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full

                    bg-gradient-to-br
                    from-emerald-500
                    to-cyan-500

                    font-bold
                    text-white
                  "
                >
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="hidden md:block text-left">

                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {user?.name}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {user?.email}
                </p>

              </div>

              <FiChevronDown
                className={`hidden md:block transition duration-300 ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />

            </button>

            {profileOpen && (

              <Card
                hover={false}
                className="absolute right-0 mt-4 w-80 p-3 z-50"
              >

                <div className="flex items-center gap-4 pb-4 border-b border-slate-200/70 dark:border-slate-700/60">

                  {user?.picture ? (
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-lg font-bold text-white">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div>

                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {user?.name}
                    </h3>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {user?.email}
                    </p>

                  </div>

                </div>

                <div className="mt-3 space-y-2">

                  <button
                    onClick={() => {
                      navigate("/dashboard/settings");
                      setProfileOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition hover:bg-emerald-500/10"
                  >
                    <FiUser />
                    My Profile
                  </button>

                  <button
                    onClick={() => {
                      navigate("/dashboard/settings");
                      setProfileOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition hover:bg-emerald-500/10"
                  >
                    <FiSettings />
                    Settings
                  </button>

                  <button
                    onClick={() => {
                      handleLogout();
                      setProfileOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-red-500 transition hover:bg-red-500/10"
                  >
                    <FiLogOut />
                    Logout
                  </button>

                </div>

              </Card>

            )}

          </div>

        </div>

      </div>

    </Card>
  );
}

export default Header;