import Eyebrow from "./Eyebrow";
import StepCard from "./StepCard";

const steps = [
  {
    title: "A free chat",
    description:
      "We talk through what you're working on and where communications is stretched. No pitch, just a clear sense of whether I can help.",
  },
  {
    title: "A clear plan",
    description:
      "A focused review and a practical plan: what to prioritise, what to stop, and how to make the most of the capacity you have.",
  },
  {
    title: "Steady delivery",
    description:
      "Hands-on delivery and promotion structured around agreed outputs and timeframes, building your team's capability as we go.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-24">
        <div className="text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-ink md:text-4xl">
            A simple way to start
          </h2>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <StepCard key={step.title} number={i + 1} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
