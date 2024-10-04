import Navbar from "@/sections/Nav/Navbar";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/sections/HeroSection/HeroSection";
import SimpleSteps from "@/sections/SimpleSteps/SimpleSteps";
import WeightLossFeatures from "@/sections/WeightLossSection/WeightLossFeatures/WeightLossFeatures";
import WeightLossTestimonials from "@/sections/WeightLossSection/WeightLossTestimonials/WeightLossTestimonials";
import WeightLossDoctors from "@/sections/WeightLossSection/WeightLossDoctors/WeightLossDoctors";
import ElevatingWeightLoss from "@/sections/ElevatingWeightLoss/ElevatingWeightLoss";
import BrandImage from "@/sections/BrandImages/BrandImage";
import Footer from "@/sections/Footer/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { cookies } from "next/headers";
import { formActions } from "@/utils/formActions";
const heroImg = require("../../../../public/webp/get-fitter-today-banner.webp");
const ConsultationForm = dynamic(
  () => import("@/sections/ConsultationForm/ConsultationForm")
);

const FloatingButton = dynamic(() => import("@/components/FloatingButton"));
const Page = () => {
  const cookieStore = cookies();
  const fbp = cookieStore.get("_fbp");
  const fbc = cookieStore.get("_fbc");
  return (
    <main>
      <Navbar
        fbc={fbc?.value}
        fbp={fbp?.value}
        formActionLink={formActions["guaranteed-weight-loss"]}
      />
      <div className="flex flex-col md:flex-row md:max-w-7xl mx-auto">
        <HeroSection />
        <ConsultationForm
          fbc={fbc?.value}
          fbp={fbp?.value}
          formActionLink={formActions["guaranteed-weight-loss"]}
        />
        <Image
          src={heroImg}
          className="hidden md:block"
          loading="lazy"
          alt={"Hero Image Desktop"}
          fill
          style={{ objectFit: "cover", zIndex: -1 }}
        />
      </div>
      <SimpleSteps />
      <WeightLossFeatures />
      <WeightLossTestimonials />
      <WeightLossDoctors />
      <ElevatingWeightLoss />
      <BrandImage />
      <Footer />
      <FloatingButton
        fbc={fbc?.value}
        fbp={fbp?.value}
        formActionLink={formActions["guaranteed-weight-loss"]}
      />
    </main>
  );
};

export default Page;
