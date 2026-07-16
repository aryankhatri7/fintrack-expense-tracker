import { useState } from "react";

import {
  FiArrowUpRight,
  FiPlus,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

import TopSpendingCard from "../components/TopSpendingCard";
import AddTransactionModal from "../components/AddTransactionModal";
import StatsCards from "../components/StatsCards";
import RecentTransactions from "../components/RecentTransactions";
import ExpenseChart from "../charts/ExpenseChart";
import MonthlySummaryCard from "../components/MonthlySummaryCard";
import FinancialHealthCard from "../components/FinancialHealthCard";

function Dashboard() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="space-y-8">

      {/* HERO */}

      <Card
        glow
        className="relative overflow-hidden p-8 lg:p-10"
      >
        {/* Background Glow */}

        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-[100px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />

        <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div className="max-w-2xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-500">

              <FiShield />

              Your finances are protected

            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white lg:text-5xl">

              Welcome back 👋

            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">

              Track your spending, monitor your savings,
              and make smarter financial decisions with your
              personalized finance dashboard.

            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Button
                onClick={() => setOpenModal(true)}
                leftIcon={<FiPlus />}
              >
                Add Transaction
              </Button>

              <Button
                variant="secondary"
                rightIcon={<FiArrowUpRight />}
              >
                View Analytics
              </Button>

            </div>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-5 lg:w-[360px]">

            <Card
              hover={false}
              glow
              className="p-5"
            >
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Monthly Growth
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white">
                +18%
              </h2>

              <div className="mt-5 flex items-center gap-2 text-emerald-500">

                <FiTrendingUp />

                <span className="text-sm font-semibold">
                  Excellent
                </span>

              </div>

            </Card>

            <Card
              hover={false}
              className="p-5"
            >
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Active Budget
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white">
                87%
              </h2>

              <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
                Budget Remaining
              </p>

            </Card>

          </div>

        </div>

      </Card>

      {/* Stats */}

      <StatsCards />

      {/* Charts */}

      <div className="grid gap-6 xl:grid-cols-2">

        <ExpenseChart />

      </div>

      {/* Smart Insights */}

      <div className="grid gap-6 xl:grid-cols-3">

        <TopSpendingCard />

        <MonthlySummaryCard />

        <FinancialHealthCard />

      </div>

      {/* Recent Transactions */}

      <RecentTransactions />

      <AddTransactionModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />

    </div>
  );
}

export default Dashboard;