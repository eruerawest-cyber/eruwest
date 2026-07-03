export default function StepCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <span
        className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-primary font-serif text-xl font-bold text-white"
        aria-hidden="true"
      >
        {number}
      </span>
      <h3 className="mt-5 font-serif text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted">{description}</p>
    </div>
  );
}
