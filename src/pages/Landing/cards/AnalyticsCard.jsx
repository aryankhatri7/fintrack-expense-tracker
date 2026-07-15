import {
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { value: 3200 },
  { value: 4800 },
  { value: 3900 },
  { value: 6100 },
  { value: 5600 },
  { value: 7200 },
  { value: 6800 },
];

function AnalyticsCard() {
  return (
    <div
      className="
      mt-5
      rounded-[30px]
      border
      border-slate-200/70
      bg-white/80
      dark:bg-slate-900/80
      dark:border-slate-700/60
      backdrop-blur-xl
      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
    "
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Spending Analytics
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
            Monthly Trend
          </h3>

        </div>

        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
          +18%
        </span>

      </div>

      <div className="mt-5 h-40">

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="value"
              stroke="#10B981"
              strokeWidth={3}
              fill="url(#heroGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default AnalyticsCard;