import { Link } from "react-router-dom";
import { FiShield, FiTrendingUp, FiLock } from "react-icons/fi";

function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLinkTo,
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">

      {/* Background */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-emerald-400/20 blur-[140px]" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">

        <div className="grid w-full max-w-7xl overflow-hidden rounded-[36px] border border-slate-200/70 bg-white/70 shadow-[0_30px_80px_rgba(15,23,42,.08)] backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70 lg:grid-cols-2">

          {/* Left Side */}
          <div className="
hidden
lg:flex
relative
overflow-hidden
flex-col
justify-between

bg-gradient-to-br
from-emerald-600
via-emerald-500
to-cyan-500

p-12

text-white
">

            <div>

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-xl text-3xl font-black">
                  FT
                </div>

                <div>

                  <h1 className="text-4xl font-black">
                    FinTrack
                  </h1>

                  <p className="text-white/80">
                    Smart Personal Finance
                  </p>

                </div>

              </div>

              <h2 className="mt-16 text-5xl font-black leading-tight">
                Money management,
made beautifully simple.
              </h2>

              <p className="mt-6 max-w-md text-lg text-white/80">
                One dashboard for your income, expenses, budgets, savings and financial growth.
              </p>

            </div>

            <div className="space-y-5">

              <Feature icon={<FiShield />} text="Bank-level secure authentication" />

              <Feature icon={<FiTrendingUp />} text="Powerful analytics & reports" />

              <Feature icon={<FiLock />} text="Private & encrypted financial data" />

            </div>

          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-6 md:p-12">

            <div className="w-full max-w-md">

              <h2 className="text-4xl font-black text-slate-900 dark:text-white">
                {title}
              </h2>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                {subtitle}
              </p>

              <div className="mt-10">
                {children}
              </div>

              <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">

                {footerText}{" "}

                <Link
                  to={footerLinkTo}
                  className="font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  {footerLinkText}
                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-xl">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-xl">
        {icon}
      </div>

      <span className="font-medium">
        {text}
      </span>

    </div>
  );
}

export default AuthLayout;