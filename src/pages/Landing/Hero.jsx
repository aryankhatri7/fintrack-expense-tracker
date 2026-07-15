import { Link } from "react-router-dom";
import { FiArrowRight, FiPlayCircle, FiCheckCircle } from "react-icons/fi";
import HeroMockup from "./HeroMockup";
function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-16 lg:px-8">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
              ✨ Smart • Secure • Simple
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white lg:text-7xl">

  Take Control of
  <span className="block bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
    Your Finances
  </span>

  with Confidence.

</h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Track every transaction, manage budgets, visualize spending,
and make smarter financial decisions from one secure,
beautifully designed finance platform.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-600"
              >
                Start Free
                <FiArrowRight />
              </Link>

              <button
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
              >
                <FiPlayCircle />
                Explore Demo
              </button>

            </div>

            {/* Trust */}
            <div className="mt-10 flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">

              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-emerald-500" />
                Google Authetication
              </div>

              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-emerald-500" />
                Bank-grade Security
              </div>

              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-emerald-500" />
                Free Forever Plan
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <HeroMockup />

        </div>

      </div>
    </section>
  );
}

export default Hero;