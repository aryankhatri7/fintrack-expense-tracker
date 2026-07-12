import { useState } from "react";
import TopSpendingCard from "../components/TopSpendingCard";
import AddTransactionModal from "../components/AddTransactionModal";
import StatsCards from "../components/StatsCards";
import RecentTransactions from "../components/RecentTransactions";
import ExpenseChart from "../charts/ExpenseChart";
import MonthlySummaryCard from "../components/MonthlySummaryCard";
import FinancialHealthCard from "../components/FinancialHealthCard";

// Future Components
// import WeeklySpendingChart from "../charts/WeeklySpendingChart";
// import TopSpendingCard from "../components/TopSpendingCard";
// import MonthlySummary from "../components/MonthlySummary";
// import FinancialTip from "../components/FinancialTip";
// import QuickActions from "../components/QuickActions";

function Dashboard() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="space-y-8">

      {/* Hero */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="text-white/80 mt-2">
            Here's your financial overview today.
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-white text-violet-700 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
        >
          + Add Transaction
        </button>

      </section>

      {/* Financial Snapshot */}
      <StatsCards />

      {/* Charts */}
      <div className="grid xl:grid-cols-2 gap-6">

        <ExpenseChart />

        {/* WeeklySpendingChart */}

      </div>

{/* Smart Insights */}
<div className="grid xl:grid-cols-3 gap-6">

  <TopSpendingCard />

  <MonthlySummaryCard />

  <FinancialHealthCard />

</div>

{/* Recent Transactions */}
<RecentTransactions />

      {/* Financial Tip */}

      {/* Quick Actions */}

      <AddTransactionModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />

    </div>
  );
}

export default Dashboard;
