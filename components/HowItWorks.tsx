import Eyebrow from "./Eyebrow";
import StepCard from "./StepCard";

const steps = [
  {
    title: "A free chat",
    description:
      "We talk through what you’re working on and where support would help.",
  },
  {
    title: "A clear scope",
    description:
      "We agree the priorities, outputs, fee and how we’ll work together.",
  },
  {
    title: "Practical delivery",
    description:
      "I carry out the agreed work, with clear approvals and regular contact.",
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
