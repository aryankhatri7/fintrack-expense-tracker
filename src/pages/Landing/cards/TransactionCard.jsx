import {
  FiCoffee,
  FiShoppingBag,
  FiHome,
} from "react-icons/fi";

const transactions = [
  {
    icon: <FiCoffee />,
    title: "Starbucks",
    category: "Food & Drinks",
    amount: "-₹450",
    color: "text-rose-500",
  },
  {
    icon: <FiShoppingBag />,
    title: "Amazon",
    category: "Shopping",
    amount: "-₹2,150",
    color: "text-rose-500",
  },
  {
    icon: <FiHome />,
    title: "Salary",
    category: "Income",
    amount: "+₹50,000",
    color: "text-emerald-500",
  },
];

function TransactionCard() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[30px]
        border border-slate-200/70
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
      {/* Glow */}
      <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl" />

      {/* Heading */}
      <div className="mb-5">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Recent Transactions
        </p>

        <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
          Activity
        </h3>
      </div>

      {/* Transactions */}
      <div className="space-y-4">
        {transactions.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {item.icon}
              </div>

              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.category}
                </p>
              </div>
            </div>

            <span className={`font-semibold ${item.color}`}>
              {item.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionCard;