import FloatingButton from "@/components/FloatingButton";
import AdvancedWeightLossTestimonial1 from "@/sections/AdvancedWeightLoss/AdvancedWeightLossTestimonial1";
import ComprehensiveSolution from "@/sections/AdvancedWeightLoss/ComprehensiveSolution";
import HeroSection from "@/sections/AdvancedWeightLoss/HeroSection";
import BrandImage from "@/sections/BrandImages/BrandImage";
import ElevatingWeightLoss from "@/sections/ElevatingWeightLoss/ElevatingWeightLoss";
import HeroCard from "@/sections/ExpertWeightLoss/HeroCard";
import HeroLeftCard from "@/sections/ExpertWeightLoss/HeroLeftCard";
import ExpertHeroSection from "@/sections/ExpertWeightLoss/HeroSection";
import OurSolution from "@/sections/ExpertWeightLoss/OurSolution";
import Faq from "@/sections/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import NavbarV2 from "@/sections/Nav/NavbarV2";
import SimpleSteps from "@/sections/SimpleSteps/SimpleSteps";
import Testimonials from "@/sections/Testimonials/Testimonials";
import WeightLossDoctors from "@/sections/WeightLossSection/WeightLossDoctors/WeightLossDoctors";
import { formActions } from "@/utils/formActions";
import { cookies } from "next/headers";

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
      <ExpertHeroSection
        fbc={fbp?.value}
        fbp={fbp?.value}
        formActionLink={formActions?.["staging-home-page"]}
      />
      <OurSolution />
      <div className="max-w-7xl mx-auto">
        <HeroCard />
        <HeroLeftCard />
      </div>
      <SimpleSteps />
      <Testimonials />
      <WeightLossDoctors />
      <Faq />
      <ElevatingWeightLoss />
      <BrandImage />
      <FloatingButton
        fbc={fbp?.value}
        fbp={fbp?.value}
        formActionLink={formActions?.["staging-home-page"]}
      />
      <Footer />
    </main>
  );
}
