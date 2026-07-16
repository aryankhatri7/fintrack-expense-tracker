import { FiInbox } from "react-icons/fi";
import Button from "../ui/Button";

function EmptyTransactions({
  onAddTransaction,
}) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl py-20 px-8 text-center">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">

        <FiInbox size={36} />

      </div>

      <h2 className="mt-6 text-2xl font-black text-slate-900 dark:text-white">
        No Transactions Yet
      </h2>

      <p className="mx-auto mt-3 max-w-md text-slate-500 dark:text-slate-400">
        Start tracking your income and expenses. Your financial insights will appear here once you add your first transaction.
      </p>

      <Button
        className="mt-8"
        size="lg"
        onClick={onAddTransaction}
      >
        Add First Transaction
      </Button>

    </div>
  );
}

export default EmptyTransactions;