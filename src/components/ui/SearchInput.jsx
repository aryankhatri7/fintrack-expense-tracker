import { FiSearch } from "react-icons/fi";
import { cn } from "../../utils/cn";

function SearchInput({
  placeholder = "Search...",
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        `
        flex items-center
        gap-3

        h-14
        px-5

        rounded-2xl

        bg-white/80
        dark:bg-slate-900/80

        backdrop-blur-xl

        border
        border-slate-200/70
        dark:border-slate-700/60

        shadow-[0_12px_40px_rgba(15,23,42,0.06)]

        transition-all
        duration-300

        focus-within:border-emerald-400
        focus-within:shadow-[0_18px_50px_rgba(16,185,129,0.12)]
        `,
        className
      )}
    >
      <FiSearch className="text-slate-400 text-xl shrink-0" />

      <input
        className="
          w-full
          bg-transparent
          outline-none

          text-slate-800
          dark:text-white

          placeholder:text-slate-400
          dark:placeholder:text-slate-500
        "
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

export default SearchInput;