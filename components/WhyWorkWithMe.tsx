import Eyebrow from "./Eyebrow";
import StatCard from "./StatCard";

const stats = [
  { value: "13+", label: "years of senior communications experience" },
  { value: "2", label: "public & private sectors, many industries" },
  { value: "4", label: "ways to engage, from strategy to coaching" },
  { value: "1:1", label: "a single, senior point of contact throughout" },
];

export default function WhyWorkWithMe() {
  return (
    <section id="why-me" className="scroll-mt-20 bg-teal-primary">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
        <Eyebrow variant="white">Why work with me</Eyebrow>
        <div className="mt-5 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
              Senior experience, a calm approach, and a bias to delivery.
            </h2>
            <p className="mt-6 leading-relaxed text-teal-muted">
              Over 13 years&rsquo; senior communications experience across the
              public and private sectors, in a diverse range of industries.
              Comfortable supporting both strategy and delivery, and known for
              staying calm and keeping things moving.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <StatCard key={stat.value} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
