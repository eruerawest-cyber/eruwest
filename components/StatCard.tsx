export default function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-teal-accent/40 p-6">
      <p className="font-serif text-4xl font-bold text-white">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-teal-muted">{label}</p>
    </div>
  );
}
