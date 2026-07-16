import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import Transactions from "../pages/Transactions";
import Budget from "../pages/Budget";
import Settings from "../pages/Settings";

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />

        <div className="absolute top-1/2 -right-32 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[140px]" />

      </div>

      <div className="relative z-10 flex min-h-screen">

        {/* Sidebar */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Main Content */}
        <main className="flex flex-1 flex-col overflow-hidden">

          <div className="flex-1 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">

            <Header
              setSidebarOpen={setSidebarOpen}
            />

            <div className="mt-8">

              <Routes>

                <Route
                  index
                  element={<Dashboard />}
                />

                <Route
                  path="analytics"
                  element={<Analytics />}
                />

                <Route
                  path="transactions"
                  element={<Transactions />}
                />

                <Route
                  path="budget"
                  element={<Budget />}
                />

                <Route
                  path="settings"
                  element={<Settings />}
                />

              </Routes>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default AppLayout;