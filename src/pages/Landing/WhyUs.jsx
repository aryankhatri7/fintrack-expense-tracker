import {
  FiCheckCircle,
  FiShield,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const reasons = [
  {
    icon: FiTrendingUp,
    title: "Built for Modern Finance",
    description:
      "Track income, expenses, budgets, and analytics in one clean and intuitive platform.",
  },
  {
    icon: FiShield,
    title: "Security Comes First",
    description:
      "JWT authentication, Google Sign-In, encrypted passwords, and secure backend architecture keep your account protected.",
  },
  {
    icon: FiZap,
    title: "Fast & Effortless",
    description:
      "Designed with performance and simplicity in mind so you can focus on your finances instead of learning complicated software.",
  },
];

function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-28 lg:py-36"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-500">
              Why FinTrack
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-5xl">
              More than an expense tracker.
              <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
                Built for financial confidence.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600 dark:text-slate-300">
              FinTrack combines beautiful design with powerful finance
              tools to help you understand your money, stay on budget,
              and make smarter financial decisions every day.
            </p>

          </div>

          {/* Right Side */}

          <div className="space-y-8">

            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group rounded-3xl border border-slate-200/70 bg-white/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl dark:border-slate-700/70 dark:bg-slate-900/70"
                >
                  <div className="flex items-start gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">

                      <Icon size={26} />

                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {reason.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                        {reason.description}
                      </p>

                    </div>

                  </div>
                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom Stats */}

        <div className="mt-24 grid gap-6 rounded-[32px] border border-slate-200/70 bg-white/70 p-10 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/70 md:grid-cols-3">

          <div className="text-center">

            <h3 className="text-5xl font-black text-emerald-500">
              100%
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Responsive Experience
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-5xl font-black text-emerald-500">
              24/7
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Secure Access
            </p>

          </div>

          <div className="text-center">

            <h3 className="text-5xl font-black text-emerald-500">
              ∞
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Financial Insights
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyUs;