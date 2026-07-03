import Eyebrow from "./Eyebrow";

const needs = [
  {
    label: "Multiple audiences and channels to serve",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    ),
  },
  {
    label: "Limited in-house communications capacity",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    label: "Trying to balance quality with cut-through",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
      />
    ),
  },
];

export default function WhoIWorkWith() {
  return (
    <section id="who-i-work-with" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
        <Eyebrow>Who I work with</Eyebrow>
        <div className="mt-5 grid gap-10 md:grid-cols-2 md:gap-16">
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink md:text-4xl">
            Organisations with complex, evolving communications needs.
          </h2>
          <div>
            <p className="leading-relaxed text-muted">
              You&rsquo;re doing meaningful work, but communications is getting
              harder to keep on top of. Maybe you&rsquo;re juggling several
              audiences and channels, working with limited in-house capacity,
              or trying to balance quality with cut-through.
            </p>
            <ul className="mt-8 space-y-4">
              {needs.map((need) => (
                <li key={need.label} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-accent/10 text-teal-accent">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      {need.icon}
                    </svg>
                  </span>
                  <span className="font-medium text-ink">{need.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
