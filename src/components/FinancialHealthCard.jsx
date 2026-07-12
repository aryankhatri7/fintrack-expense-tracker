import { useContext } from "react";
import { FiShield } from "react-icons/fi";

import { TransactionContext } from "../context/TransactionContext";
import { getFinancialHealthScore } from "../utils/dashboardAnalytics";

function FinancialHealthCard() {
  const { transactions } = useContext(TransactionContext);

  const { score, status } = getFinancialHealthScore(transactions);

  const progressColor =
    score >= 80
      ? "bg-green-500"
      : score >= 60
      ? "bg-yellow-500"
      : score >= 40
      ? "bg-orange-500"
      : "bg-red-500";

  const statusColor =
    score >= 80
      ? "text-green-500"
      : score >= 60
      ? "text-yellow-500"
      : score >= 40
      ? "text-orange-500"
      : "text-red-500";

  const tip =
    score >= 80
      ? "Excellent! Keep maintaining your saving habits."
      : score >= 60
      ? "You're doing well. Try increasing your monthly savings."
      : score >= 40
      ? "Watch your spending and aim for a higher savings rate."
      : "Your expenses are too high. Focus on reducing unnecessary spending.";

  return (
    <div className="rounded-3xl p-6 border bg-white dark:bg-white/5 border-black/10 dark:border-white/10 shadow-lg">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          🛡 Financial Health
        </h2>

        <div className="p-3 rounded-2xl bg-green-500/20 text-green-500">
          <FiShield />
        </div>

      </div>

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <span className="text-slate-500 dark:text-white/60">
            Score
          </span>

          <span className={`font-bold ${statusColor}`}>
            {score}/100
          </span>

        </div>

        <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">

          <div
            className={`h-full ${progressColor}`}
            style={{ width: `${score}%` }}
          />

        </div>

        <h3 className={`mt-6 text-2xl font-bold ${statusColor}`}>
          {status}
        </h3>

        <p className="mt-4 text-slate-500 dark:text-white/60">
          {tip}
        </p>

      </div>

    </div>
  );
}

export default FinancialHealthCard;