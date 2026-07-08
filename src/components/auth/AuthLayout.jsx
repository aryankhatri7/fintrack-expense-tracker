import { Link } from "react-router-dom";

function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLinkTo,
}) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-4 py-10 transition-all duration-300">

      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-violet-600">
            FinTrack
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Smart Personal Finance Management
          </p>

        </div>

        {/* Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-black/10 dark:border-white/10 shadow-xl p-8 transition-all duration-300">

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            {title}
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            {subtitle}
          </p>

          <div className="mt-8">
            {children}
          </div>

          <div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">

            {footerText}{" "}

            <Link
              to={footerLinkTo}
              className="text-violet-600 hover:text-violet-700 font-semibold transition-colors"
            >
              {footerLinkText}
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;