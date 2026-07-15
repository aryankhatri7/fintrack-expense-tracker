import {
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import BalanceCard from "./cards/BalanceCard";
import AnalyticsCard from "./cards/AnalyticsCard";
import BudgetCard from "./cards/BudgetCard";
import TransactionCard from "./cards/TransactionCard";

function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="relative overflow-hidden py-28 lg:py-36"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-500">
              Dashboard Preview
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-5xl">
              Manage your finances
              <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                from one beautiful dashboard.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Track transactions, monitor budgets,
              visualize analytics and stay in complete
              control of your money through one
              elegant experience.
            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3">

                <FiCheckCircle className="text-emerald-500" />

                Smart Financial Overview

              </div>

              <div className="flex items-center gap-3">

                <FiCheckCircle className="text-emerald-500" />

                Beautiful Analytics

              </div>

              <div className="flex items-center gap-3">

                <FiCheckCircle className="text-emerald-500" />

                Budget Planning

              </div>

              <div className="flex items-center gap-3">

                <FiCheckCircle className="text-emerald-500" />

                Real-time Transactions

              </div>

            </div>

            <button
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-emerald-600"
            >
              Explore Dashboard

              <FiArrowRight />

            </button>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="grid gap-6">

              <BalanceCard />

              <AnalyticsCard />

              <div className="grid grid-cols-2 gap-6">

                <BudgetCard />

                <TransactionCard />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;