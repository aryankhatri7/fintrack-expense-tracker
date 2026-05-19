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

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Analytics
        </h1>

        <p className="text-slate-500 dark:text-white/50 mt-2">
          Financial insights and spending overview
        </p>

      </div>

      <AnalyticsStats />

      <div className="grid xl:grid-cols-2 gap-8">

        <MonthlyBarChart />

        <IncomeExpenseChart />

      </div>

      <WeeklySpendingChart />

    </div>
  )
}

export default Analytics