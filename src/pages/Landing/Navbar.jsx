import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Preview", href: "#preview" },
  { name: "Security", href: "#security" },
  { name: "FAQ", href: "#faq" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav
        className={`mx-auto max-w-7xl transition-all duration-300
        ${
          scrolled
            ? "mt-3 rounded-2xl border border-white/10 bg-white/75 shadow-xl backdrop-blur-2xl dark:bg-slate-900/75"
            : "bg-transparent"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6 lg:px-8">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 font-bold text-white">
              F
            </div>

            <span className="text-2xl font-bold text-slate-900 dark:text-white">
              FinTrack
            </span>
          </Link>

          {/* Desktop Nav */}

          <div className="hidden items-center gap-10 lg:flex">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-slate-600 transition hover:text-emerald-500 dark:text-slate-300"
              >
                {link.name}
              </a>
            ))}

          </div>

          {/* Desktop Buttons */}

          <div className="hidden items-center gap-4 lg:flex">

            <Link
              to="/login"
              className="rounded-xl px-5 py-2.5 font-medium text-slate-700 transition hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              Get Started

              <FiArrowRight />
            </Link>

          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl p-2 text-slate-900 dark:text-white lg:hidden"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white/90 p-6 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/90 lg:hidden">

            <div className="flex flex-col gap-5">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-700 dark:text-slate-300"
                >
                  {link.name}
                </a>
              ))}

              <hr className="border-slate-200 dark:border-slate-700" />

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-emerald-500 py-3 text-center font-semibold text-white"
              >
                Get Started
              </Link>

            </div>

          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;