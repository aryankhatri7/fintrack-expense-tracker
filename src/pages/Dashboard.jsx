import { useState } from "react"

import AddTransactionModal
  from "../components/AddTransactionModal"

import ExpenseChart
  from "../charts/ExpenseChart"

import StatsCards
  from "../components/StatsCards"

import RecentTransactions
  from "../components/RecentTransactions"

function Dashboard() {

  const [openModal, setOpenModal] =
    useState(false)

  return (

    <div className="space-y-8">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl p-5 md:p-8 shadow-2xl">

        <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight">
          Welcome Back 👋
        </h1>

        <p className="text-white/70 mt-3 text-sm md:text-lg">
          Here's your financial overview today.
        </p>

        <button
          onClick={() =>
            setOpenModal(true)
          }
          className="mt-6 bg-white text-black px-5 md:px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
        >

          + Add Transaction

        </button>

      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Charts + Transactions */}
      <div className="grid lg:grid-cols-2 gap-6">

        <ExpenseChart />

        <RecentTransactions />

      </div>

      {/* Modal */}
      <AddTransactionModal
        isOpen={openModal}
        onClose={() =>
          setOpenModal(false)
        }
      />

    </div>
  )
}

export default Dashboard