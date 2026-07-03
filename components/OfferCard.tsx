export default function OfferCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="rounded-xl bg-white p-8 shadow-sm">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-accent text-white">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          aria-hidden="true"
        >
          {icon}
        </svg>
      </span>
      <h3 className="mt-5 font-serif text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted">{description}</p>
    </article>
  );
}
