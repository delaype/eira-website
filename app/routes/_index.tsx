import type { MetaFunction } from "@remix-run/node";
import NavBar from "../components/layout/NavBar";
import HeroSection from "../components/layout/HeroSection";
import PromotionSection from "../components/layout/PromotionSection";
import FeaturesSection from "~/components/layout/FeaturesSection";
import TutorialSection from "~/components/layout/TutorialSection";
import TutorSection from "~/components/layout/TutorSection";
import SecuritySection from "~/components/layout/SecuritySection";
import TestimonialsSection from "~/components/layout/TestimonialsSection";
import PromotionalBox from "~/components/layout/PromotionalBox";
import FooterSection from "~/components/layout/FooterSection";
import { useState } from "react";
import ToggleButton from "~/components/layout/ToggleButton";
export const meta: MetaFunction = () => {
  return [
    { title: "EIRA - Home" },
    { name: "description", content: "Welcome to EIRA" },
  ];
};

export default function Home() {
  const [isStudent, setIsStudent] = useState(true);

  const handleToggleChange = () => {
    console.log("Toggle changed");
    setIsStudent(!isStudent);
  };

  return (
    <div
      className="
    w-full    
    overflow-x-hidden             /* ↓ < 640 px: 100 % width – no overflow      */
    sm:w-[90%]             /* ≥ 640 px: 90 % of the viewport            */
    max-w-[1400px]         /* hard ceiling on very wide desktops        */
    mx-auto                /* center the block                          */
    px-4                   /* a little side padding on mobile           */
    sm:px-0                /* remove that padding on ≥ 640 px           */
  "
    >
      <NavBar isToggleVisible={true} onToggleChange={handleToggleChange} />
      <ToggleButton
        isToggleVisible={true}
        onToggleChange={handleToggleChange}
      />
      <HeroSection isStudent={isStudent} />
      <PromotionSection isStudent={isStudent} />
      <FeaturesSection />
      <TutorialSection />
      <TutorSection />
      <SecuritySection />
      <TestimonialsSection />
      <PromotionalBox isStudent={isStudent} />
      <FooterSection />
    </div>
  );
}
