import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhoIWorkWith from "@/components/WhoIWorkWith";
import WhatIOffer from "@/components/WhatIOffer";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import HowItWorks from "@/components/HowItWorks";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhoIWorkWith />
        <WhatIOffer />
        <WhyWorkWithMe />
        <HowItWorks />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
