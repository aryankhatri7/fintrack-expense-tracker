import { cn } from "../../utils/cn";

function Input({
  className,
  leftIcon,
  rightIcon,
  ...props
}) {
  return (
    <div
      className={cn(
        `
        flex
        items-center
        gap-3

        h-14
        px-5

        rounded-2xl

        bg-white/70
        dark:bg-slate-900/70

        backdrop-blur-xl

        border
        border-slate-200/70
        dark:border-slate-700/60

        shadow-[0_12px_40px_rgba(15,23,42,0.05)]

        transition-all
        duration-300

        focus-within:border-emerald-400
        focus-within:shadow-[0_0_0_4px_rgba(16,185,129,0.08)]
        `,
        className
      )}
    >
      {leftIcon && (
        <div className="text-slate-400">
          {leftIcon}
        </div>
      )}

      <input
        className="
          flex-1
          bg-transparent
          outline-none

          text-slate-800
          dark:text-white

          placeholder:text-slate-400
        "
        {...props}
      />

      {rightIcon}
    </div>
  );
}

export default Input;