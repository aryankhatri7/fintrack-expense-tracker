import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-28 lg:py-36"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/15 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        <div className="overflow-hidden rounded-[40px] border border-slate-200/70 bg-white/70 p-12 text-center shadow-2xl backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/70 lg:p-20">

          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-500">
            Get Started Today
          </span>

          <h2 className="mt-8 text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-6xl">
            Take control of your
            <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              financial future.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Join FinTrack and start tracking expenses, managing budgets,
            and making smarter financial decisions with a beautifully
            designed finance platform.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/30"
            >
              Create Free Account

              <FiArrowRight />

            </Link>

            <Link
              to="/login"
              className="rounded-2xl border border-slate-300 px-8 py-4 text-lg font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
            >
              Sign In
            </Link>

          </div>

          {/* Small Trust Text */}

          <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
            No credit card required • Secure Google Sign-In • Free to get started
          </p>

        </div>

      </div>
    </section>
  );
}

export default CTA;