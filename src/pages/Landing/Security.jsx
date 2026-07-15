import {
  FiShield,
  FiLock,
  FiCheckCircle,
  FiGlobe,
} from "react-icons/fi";

const securityFeatures = [
  {
    icon: FiShield,
    title: "Secure Authentication",
    description:
      "Protected with JWT authentication and secure session management.",
  },
  {
    icon: FiLock,
    title: "Encrypted Passwords",
    description:
      "Passwords are securely hashed before storage using modern encryption practices.",
  },
  {
    icon: FiCheckCircle,
    title: "Google Sign-In",
    description:
      "Sign in quickly and securely using verified Google OAuth authentication.",
  },
  {
    icon: FiGlobe,
    title: "Cloud Powered",
    description:
      "Your data is securely stored in the cloud and accessible across your devices.",
  },
];

function Security() {
  return (
    <section
      id="security"
      className="relative overflow-hidden py-28 lg:py-36"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-500">
            Security
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
            Your financial data
            <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              deserves the highest protection.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            FinTrack is designed with modern authentication,
            secure backend architecture, and industry-standard
            practices to help protect your account.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {securityFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200/70 bg-white/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/30 hover:shadow-xl dark:border-slate-700/70 dark:bg-slate-900/70"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Security;