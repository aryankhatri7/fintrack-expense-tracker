import MonthlyBarChart
  from "../charts/MonthlyBarChart"

import IncomeExpenseChart
  from "../charts/IncomeExpenseChart"

import WeeklySpendingChart
  from "../charts/WeeklySpendingChart"

import AnalyticsStats
  from "../components/AnalyticsStats"

function Analytics() {

  return (

    <div className="space-y-6 md:space-y-8">

      {/* Page Header */}
      <div>

        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Analytics
        </h1>

        <p className="text-sm md:text-base text-slate-500 dark:text-white/50 mt-2">
          Financial insights and spending overview
        </p>

      </div>

      {/* Stats */}
      <AnalyticsStats />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">

        <MonthlyBarChart />

        <IncomeExpenseChart />

      </div>

      {/* Weekly Chart */}
      <WeeklySpendingChart />

    </div>

  )
}

export default Analytics