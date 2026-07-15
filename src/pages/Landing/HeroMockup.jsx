import BalanceCard from "./cards/BalanceCard";
import AnalyticsCard from "./cards/AnalyticsCard";
import IncomeCard from "./cards/IncomeCard";
import ExpenseCard from "./cards/ExpenseCard";

function HeroMockup() {
  return (
    <div className="relative hidden lg:flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute -top-16 right-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-cyan-400/20 blur-[100px]" />

      {/* Cards */}
      <div className="relative w-full max-w-[560px]">

        {/* Balance */}
        <div className="relative z-30">
          <BalanceCard />
        </div>

        {/* Analytics */}
        <div className="-mt-2 ml-10 relative z-20">
          <AnalyticsCard />
        </div>

        {/* Bottom Cards */}
        <div className="mt-5 grid grid-cols-2 gap-5">

          <div className="translate-y-2">
            <IncomeCard />
          </div>

          <div className="-translate-y-2">
            <ExpenseCard />
          </div>

        </div>

      </div>

    </div>
  );
}

export default HeroMockup;