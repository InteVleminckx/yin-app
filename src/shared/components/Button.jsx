import clsx from "clsx";

export default function Button({
  children,
  onClick,
  variant = "primary",
  fullWidth = true,
  disabled = false,
  className,
  type = "button",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        // Base (mobile-first)
        "h-14 rounded-xl text-lg font-medium transition active:scale-95",
        "focus:outline-none focus-visible:ring-2",

        // Width
        fullWidth && "w-full",

        // Variants
        variant === "primary" &&
          "bg-blue-600 text-white focus-visible:ring-blue-500",
        variant === "secondary" &&
          "bg-gray-800 text-white focus-visible:ring-gray-600",
        variant === "danger" &&
          "bg-red-600 text-white focus-visible:ring-red-500",

        // Disabled
        disabled && "opacity-50 pointer-events-none",

        className
      )}
    >
      {children}
    </button>
  );
}
