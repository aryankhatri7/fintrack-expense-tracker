import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
} from "react-icons/fi";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/60 bg-white dark:border-slate-800 dark:bg-slate-950">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              FinTrack
            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-600 dark:text-slate-400">
              A modern personal finance platform built to help you
              track expenses, manage budgets, and make smarter
              financial decisions with confidence.
            </p>

            <div className="mt-8 flex gap-4">

              {[FiGithub, FiLinkedin, FiTwitter, FiMail].map((Icon, index) => (

                <button
                  key={index}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  <Icon size={20} />
                </button>

              ))}

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-bold text-slate-900 dark:text-white">
              Product
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a href="#features" className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400">
                  Features
                </a>
              </li>

              <li>
                <a href="#dashboard" className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400">
                  Dashboard
                </a>
              </li>

              <li>
                <a href="#security" className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400">
                  Security
                </a>
              </li>

              <li>
                <a href="#faq" className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400">
                  FAQ
                </a>
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-bold text-slate-900 dark:text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <a href="#" className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400">
                  Roadmap
                </a>
              </li>

              <li>
                <a href="#" className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Legal */}

          <div>

            <h3 className="font-bold text-slate-900 dark:text-white">
              Legal
            </h3>

            <ul className="mt-6 space-y-4">

              <li>
                <Link
                  to="/privacy"
                  className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="text-slate-600 transition hover:text-emerald-500 dark:text-slate-400"
                >
                  Terms of Service
                </Link>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 md:flex-row">

          <p>
            © {new Date().getFullYear()} FinTrack. All rights reserved.
          </p>

          <p>
            Designed & Built with ❤️ in India.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;