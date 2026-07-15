function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200/60
        dark:border-slate-700/60
        bg-white/70
        dark:bg-slate-900/70
        backdrop-blur-xl
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-emerald-400/40
        hover:shadow-[0_25px_60px_rgba(16,185,129,0.12)]
      "
    >
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20">
        <Icon size={28} />
      </div>

      {/* Title */}
      <h3 className="mt-8 text-2xl font-bold text-slate-900 dark:text-white">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
        {feature.description}
      </p>

      {/* Learn More */}
      <div className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-600 transition-all duration-300 group-hover:gap-3">
        Learn More
        <span>→</span>
      </div>
    </div>
  );
}

export default FeatureCard;