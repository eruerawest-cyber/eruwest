import Eyebrow from "./Eyebrow";
import OfferCard from "./OfferCard";

const offers = [
  {
    title: "Strategy",
    description:
      "Clarity before activity, so effort is focused where it matters most. A review of your current strategy, channels, content and messaging, with the gaps, duplication and priorities made clear. The output is a practical plan to guide future delivery.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
      />
    ),
  },
  {
    title: "Delivery",
    description:
      "Hands-on support to consistently execute agreed communications work. Content creation across social, web and newsletters, plus editing, scheduling and publishing, all at a delivery rhythm aligned to your team's capacity and agreed timeframes.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    ),
  },
  {
    title: "Promotions",
    description:
      "Enabling and establishing paid promotion capability: configuring accounts and access, guiding audience targeting, budget and channel selection, and boosting both campaign and business-as-usual content. A solid foundation for effective promotion.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
      />
    ),
  },
  {
    title: "Development",
    description:
      "Strengthening internal capability so you rely less on outside support over time. Practical systems, templates and workflows, coaching for the people responsible for communications, and documentation that keeps things consistent as you grow.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    ),
  },
];

export default function WhatIOffer() {
  return (
    <section id="services" className="scroll-mt-20 bg-bg-light">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
        <div className="text-center">
          <Eyebrow>What I offer</Eyebrow>
          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-ink md:text-4xl">
            What working together can look like
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {offers.map((offer) => (
            <OfferCard key={offer.title} {...offer} />
          ))}
        </div>
      </div>
    </section>
  );
}
