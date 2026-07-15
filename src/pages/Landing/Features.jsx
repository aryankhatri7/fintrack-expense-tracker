import FeatureCard from "./components/FeatureCard";
import { features } from "./data/featuresData";

function Features() {
  return (
    <section
      id="features"
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-10 right-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-500">
            Powerful Features
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Everything You Need to
            <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              Master Your Money
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            FinTrack combines intelligent budgeting, insightful analytics,
            secure authentication, and a modern experience to help you
            confidently manage your finances.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;