import Navbar from "@/sections/Nav/Navbar";
import Image from "next/image";
import React from "react";
import heroImg from "../../../public/webp/get-fitter-today-banner.webp";
import WeightLossFeatures from "@/sections/WeightLossSection/WeightLossFeatures/WeightLossFeatures";
import WeightLossTestimonials from "@/sections/WeightLossSection/WeightLossTestimonials/WeightLossTestimonials";
import Doctors from "@/sections/Doctors/Doctors";
import ElevatingWeightLoss from "@/sections/ElevatingWeightLoss/ElevatingWeightLoss";
import BrandImage from "@/sections/BrandImages/BrandImage";
import Footer from "@/sections/Footer/Footer";
import FloatingButton from "@/components/FloatingButton";
import dynamic from "next/dynamic";
import WeightLossDoctors from "@/sections/WeightLossSection/WeightLossDoctors/WeightLossDoctors";
const HeroSection = dynamic(() => import("@/sections/HeroSection/HeroSection"));
const SimpleSteps = dynamic(() => import("@/sections/SimpleSteps/SimpleSteps"));
const ConsultationForm = dynamic(
  () => import("@/sections/ConsultationForm/ConsultationForm")
);

const page = () => {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col md:flex-row md:max-w-7xl mx-auto   ">
        <HeroSection />
        <ConsultationForm />
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
      <FloatingButton />
    </main>
  );
};

export default page;
