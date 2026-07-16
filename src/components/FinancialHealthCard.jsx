import { useContext } from "react";
import {
  FiShield,
  FiCheckCircle,
  FiAlertTriangle,
  FiTrendingUp,
} from "react-icons/fi";

import Card from "./ui/Card";

import { TransactionContext } from "../context/TransactionContext";
import { getFinancialHealthScore } from "../utils/dashboardAnalytics";

function FinancialHealthCard() {
  const { transactions } = useContext(TransactionContext);

  const { score, status } =
    getFinancialHealthScore(transactions);

  const progressColor =
    score >= 80
      ? "from-emerald-500 to-green-400"
      : score >= 60
      ? "from-yellow-500 to-amber-400"
      : score >= 40
      ? "from-orange-500 to-amber-500"
      : "from-red-500 to-rose-500";

  const statusColor =
    score >= 80
      ? "text-emerald-500"
      : score >= 60
      ? "text-yellow-500"
      : score >= 40
      ? "text-orange-500"
      : "text-red-500";

  const badge =
    score >= 80
      ? "Excellent"
      : score >= 60
      ? "Good"
      : score >= 40
      ? "Average"
      : "Poor";

  const tip =
    score >= 80
      ? "Your savings habits are excellent. Stay consistent and keep investing regularly."
      : score >= 60
      ? "You're on the right track. Increasing your monthly savings will improve your score."
      : score >= 40
      ? "Reduce discretionary spending and prioritize essential expenses."
      : "Your expenses are significantly higher than your income. Focus on rebuilding savings.";

  return (
    <Card
      glow
      className="
        group
        p-7
        hover:-translate-y-2
        hover:shadow-[0_35px_80px_rgba(16,185,129,0.15)]
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Financial Health
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">
            {status}
          </h2>

        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
          <FiShield size={24} />
        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="mb-3 flex items-center justify-between">

          <span className="text-sm text-slate-500 dark:text-slate-400">
            Overall Score
          </span>

          <span className={`text-lg font-bold ${statusColor}`}>
            {score}/100
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">

          <div
            className={`h-full rounded-full bg-gradient-to-r ${progressColor} transition-all duration-700`}
            style={{
              width: `${score}%`,
            }}
          />

        </div>

      </div>

      {/* Health Badge */}

      <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/40 p-4 dark:border-slate-700/60 dark:bg-slate-900/40">

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Health Rating
          </p>

          <h3 className={`mt-1 text-xl font-bold ${statusColor}`}>
            {badge}
          </h3>

        </div>

        <div className={statusColor}>
          {score >= 80 ? (
            <FiCheckCircle size={28} />
          ) : score >= 60 ? (
            <FiTrendingUp size={28} />
          ) : (
            <FiAlertTriangle size={28} />
          )}
        </div>

      </div>

      {/* Recommendation */}

      <div className="mt-8 rounded-2xl border border-slate-200/70 bg-slate-50 p-5 dark:border-slate-700/60 dark:bg-slate-900/40">

        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Recommendation
        </p>

        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {tip}
        </p>

      </div>

    </Card>
  );
}

export default FinancialHealthCard;