import ExpenseChart
  from "../charts/ExpenseChart"

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

     

      {/* Stats */}
      <AnalyticsStats />

      {/* Charts Grid */}
<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">

  <ExpenseChart />

  <IncomeExpenseChart />

  <MonthlyBarChart />

  <WeeklySpendingChart />

</div>

    </div>

  )
}

export default Analytics