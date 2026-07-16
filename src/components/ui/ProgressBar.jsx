import { cn } from "../../utils/cn";

function ProgressBar({
  value = 0,
  className,
  size = "md",
  variant = "default",
}) {

  const sizes = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
  };


  const variants = {
    default:
      value < 50
        ? "bg-emerald-500"
        : value < 80
        ? "bg-amber-500"
        : "bg-red-500",

    success:
      "bg-emerald-500",

    danger:
      "bg-red-500",

    warning:
      "bg-amber-500",
  };


  const progress = Math.min(
    Math.max(value, 0),
    100
  );


  return (

    <div
      className={cn(
        "w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10",
        sizes[size],
        className
      )}
    >

      <div
        className={cn(
          "h-full rounded-full transition-all duration-700 ease-out",
          variants[variant]
        )}
        style={{
          width: `${progress}%`,
        }}
      />

    </div>

  );
}


export default ProgressBar;