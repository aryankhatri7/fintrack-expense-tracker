import { cn } from "../../utils/cn";

function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  leftIcon,
  rightIcon,
  disabled = false,
  ...props
}) {
  const variants = {
    primary: `
      bg-emerald-500
      text-white
      hover:bg-emerald-600
      shadow-lg
      shadow-emerald-500/20
    `,

    secondary: `
      bg-white/80
      dark:bg-slate-900/80
      text-slate-900
      dark:text-white
      border
      border-slate-200/70
      dark:border-slate-700/60
      backdrop-blur-xl
      hover:bg-white
      dark:hover:bg-slate-900
    `,

    ghost: `
      bg-transparent
      text-slate-700
      dark:text-slate-200
      hover:bg-slate-100
      dark:hover:bg-slate-800
    `,

    danger: `
      bg-red-500
      text-white
      hover:bg-red-600
      shadow-lg
      shadow-red-500/20
    `,
  };

  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-emerald-500/40",
        "disabled:pointer-events-none disabled:opacity-50",
        "hover:-translate-y-0.5",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {leftIcon}

      {children}

      {rightIcon}
    </button>
  );
}

export default Button;