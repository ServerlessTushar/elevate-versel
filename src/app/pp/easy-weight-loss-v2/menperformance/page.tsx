import BrandImage from "@/sections/BrandImages/BrandImage";
import ElevatingWeightLoss from "@/sections/ElevatingWeightLoss/ElevatingWeightLoss";
import Footer from "@/sections/Footer/Footer";
import SimpleSteps from "@/sections/SimpleSteps/SimpleSteps";
import WeightLossDoctors from "@/sections/WeightLossSection/WeightLossDoctors/WeightLossDoctors";
import EasyWeightLossTestimonials from "@/sections/EasyWeightLoss/EasyWeightLossTestimonials";
import EasyWeightLossHero from "@/sections/EasyWeightLoss/EasyWeightLossHero";
import WeightLossFeatures from "@/sections/WeightLossSection/WeightLossFeatures/WeightLossFeatures";
import Image from "next/image";
import React from "react";
import heroImg from "../../../../../public/weight-loss-hero-img.webp";
import EasyWeightLossNavbar from "@/sections/Nav/EasyWeightLossNavbar";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import { formActions } from "@/utils/formActions";
import ConsultationForm from "@/sections/ConsultationForm/ConsultationForm";

const EasyWeightLossConsultationForm = dynamic(
  () => import("@/sections/ConsultationForm/EasyWeightLossConsultationForm")
);
const FloatingButton = dynamic(() => import("@/components/FloatingButton"));
const page = () => {
  const cookieStore = cookies();
  const fbp = cookieStore.get("_fbp");
  const fbc = cookieStore.get("_fbc");
  return (
    <div>
      <main>
        <EasyWeightLossNavbar fbc={fbc?.value} fbp={fbp?.value} formActionLink={formActions["easy-weight-loss-v2"]} />
        <Image
          src={heroImg}
          className="hidden md:block absolute lg:w-[65%] h-full"
          loading="lazy"
          alt={"Hero Image Desktop"}
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        <div className="flex flex-col md:flex-row md:max-w-[99rem] mx-auto">
          <EasyWeightLossHero />
          <div className="lg:ml-20">
            <ConsultationForm
              page="easy-weight-loss"
              fbc={fbc?.value}
              fbp={fbp?.value}
              formActionLink={formActions["easy-weight-loss-v2"]}
            />
          </div>
        </div>
        <SimpleSteps />
        <WeightLossFeatures />
        <EasyWeightLossTestimonials />
        <WeightLossDoctors />
        <ElevatingWeightLoss />
        <BrandImage />
        <Footer />
        <FloatingButton fbc={fbc?.value} fbp={fbp?.value} formActionLink={formActions["easy-weight-loss-v2"]}
        />
      </main>
    </div>
  );
};

export default page;
