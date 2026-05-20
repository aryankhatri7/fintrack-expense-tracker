import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  {
    month: "Jan",
    expense: 400,
  },

  {
    month: "Feb",
    expense: 700,
  },

  {
    month: "Mar",
    expense: 500,
  },

  {
    month: "Apr",
    expense: 900,
  },

  {
    month: "May",
    expense: 650,
  },

  {
    month: "Jun",
    expense: 850,
  },
]

function MonthlyBarChart() {

  return (

    <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-5 md:p-6 transition-all duration-300">

      {/* Header */}
      <div className="mb-6">

        <h2 className="text-slate-900 dark:text-white text-xl md:text-2xl font-bold">
          Monthly Spending
        </h2>

        <p className="text-slate-600 dark:text-white/50 mt-1 text-sm md:text-base">
          Expense overview by month
        </p>

      </div>

      {/* Chart */}
      <div className="h-[280px] md:h-[350px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
            />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                color: "#fff",
              }}
            />

            <Bar
              dataKey="expense"
              radius={[10, 10, 0, 0]}
              fill="#8b5cf6"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  )
}

export default MonthlyBarChart