import {
  FiTrendingUp,
  FiTrendingDown,
  FiActivity,
  FiTarget,
} from "react-icons/fi"

const stats = [
  {
    title: "Monthly Growth",
    value: "+18%",
    icon: <FiTrendingUp />,
    color:
      "bg-green-500/20 text-green-400",
  },

  {
    title: "Highest Spending",
    value: "Saturday",
    icon: <FiTrendingDown />,
    color:
      "bg-red-500/20 text-red-400",
  },

  {
    title: "Savings Rate",
    value: "32%",
    icon: <FiTarget />,
    color:
      "bg-violet-500/20 text-violet-400",
  },

  {
    title: "Avg Weekly Spend",
    value: "$196",
    icon: <FiActivity />,
    color:
      "bg-blue-500/20 text-blue-400",
  },
]

function AnalyticsStats() {
return (
  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

    {stats.map((item) => (

      <div
        key={item.title}
        className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 shadow-sm dark:shadow-none"
      >

        <div className="flex items-center justify-between">

          <div>

            <p className="text-slate-500 dark:text-white/50 text-sm">
              {item.title}
            </p>

            <h2 className="text-slate-900 dark:text-white text-3xl font-bold mt-3">
              {item.value}
            </h2>

          </div>

          <div
            className={`p-4 rounded-2xl text-2xl ${item.color}`}
          >
            {item.icon}
          </div>

        </div>

      </div>

    ))}

  </div>
)
}

export default AnalyticsStats