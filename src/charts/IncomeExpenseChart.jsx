import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  {
    month: "Jan",
    income: 2400,
    expense: 1400,
  },

  {
    month: "Feb",
    income: 2800,
    expense: 1700,
  },

  {
    month: "Mar",
    income: 3200,
    expense: 1900,
  },

  {
    month: "Apr",
    income: 3000,
    expense: 2200,
  },

  {
    month: "May",
    income: 3600,
    expense: 2100,
  },

  {
    month: "Jun",
    income: 4000,
    expense: 2600,
  },
]

function IncomeExpenseChart() {
  return (
  <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-6 transition-all duration-300">

    <div className="mb-6">

      <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
        Income vs Expenses
      </h2>

      <p className="text-slate-600 dark:text-white/50 mt-1">
        Financial flow comparison
      </p>

    </div>

    <div className="h-[350px]">

      <ResponsiveContainer width="100%" height="100%">

        <AreaChart data={data}>

          <XAxis
            dataKey="month"
            stroke="#94a3b8"
          />

          <YAxis
            stroke="#94a3b8"
          />

          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              color: "#fff",
            }}
          />

          <Area
            type="monotone"
            dataKey="income"
            stackId="1"
            stroke="#22c55e"
            fill="#22c55e"
            fillOpacity={0.3}
          />

          <Area
            type="monotone"
            dataKey="expense"
            stackId="2"
            stroke="#ef4444"
            fill="#ef4444"
            fillOpacity={0.3}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>

  </div>
)
}

export default IncomeExpenseChart