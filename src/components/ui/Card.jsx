import { cn } from "../../utils/cn";

function Card({
  children,
  className,
  variant = "glass",
  hover = true,
  glow = false,
  overflow = true,
  ...props
}) {
  const variants = {
    glass: `
      bg-white/80
      dark:bg-slate-900/80
      backdrop-blur-xl
      border border-slate-200/70
      dark:border-slate-700/60
      shadow-[0_20px_60px_rgba(15,23,42,0.08)]
    `,

    default: `
      bg-white
      dark:bg-slate-900
      border border-slate-200
      dark:border-slate-800
      shadow-sm
    `,

    outlined: `
      bg-transparent
      border border-slate-200
      dark:border-slate-700
    `,
  };

  return (
    <div
      className={cn(
        "relative rounded-[30px] transition-all duration-300",
        variants[variant],
        hover &&
          "hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(16,185,129,0.12)]",
        glow &&
          "before:absolute before:-top-24 before:-right-24 before:h-48 before:w-48 before:rounded-full before:bg-emerald-400/15 before:blur-3xl before:content-['']",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;