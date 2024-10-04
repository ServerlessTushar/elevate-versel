import NavbarV2 from "@/sections/Nav/NavbarV2";
import Footer from "@/sections/Footer/Footer";
import React from "react";
import { cookies } from "next/headers";
import { formActions } from "@/utils/formActions";
import WholeBodyApproach from "@/sections/AdvancedWeightLoss/WholeBodyApproach";
import FloatingButton from "@/components/FloatingButton";
import HeroSection from "@/sections/AdvancedWeightLoss/HeroSection";
import ComprehensiveSolution from "@/sections/AdvancedWeightLoss/ComprehensiveSolution";
import AdvancedWeightLossTestimonial1 from "@/sections/AdvancedWeightLoss/AdvancedWeightLossTestimonial1";
export default function Home() {
  const cookieStore = cookies();
  const fbp = cookieStore.get("_fbp");
  const fbc = cookieStore.get("_fbc");
  return (
    <main>
      <NavbarV2
        fbc={fbp?.value}
        fbp={fbp?.value}
        formActionLink={formActions?.["staging-home-page"]}
      />
      <HeroSection />
      <ComprehensiveSolution />
      <WholeBodyApproach />
      <AdvancedWeightLossTestimonial1 />
      <FloatingButton
        fbc={fbp?.value}
        fbp={fbp?.value}
        formActionLink={formActions?.["staging-home-page"]}
      />
      <Footer />
    </main>
  );
}
