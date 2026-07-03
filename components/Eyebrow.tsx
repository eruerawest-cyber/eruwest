export default function Eyebrow({
  children,
  variant = "teal",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "teal" | "white";
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.2em] ${
        variant === "white" ? "text-teal-muted" : "text-teal-accent"
      } ${className}`}
    >
      {children}
    </p>
  );
}
