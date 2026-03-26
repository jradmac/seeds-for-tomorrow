import { Hero } from "@/components/home/Hero";
import { ProblemStats } from "@/components/home/ProblemStats";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhatWeTeach } from "@/components/home/WhatWeTeach";
import { WhyAI } from "@/components/home/WhyAI";
import { PilotSection } from "@/components/home/PilotSection";
import { ImpactMetrics } from "@/components/home/ImpactMetrics";
import { GetInvolved } from "@/components/home/GetInvolved";
import { FAQ } from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemStats />
      <HowItWorks />
      <WhatWeTeach />
      <WhyAI />
      <PilotSection />
      <ImpactMetrics />
      <GetInvolved />
      <FAQ />
    </>
  );
}
