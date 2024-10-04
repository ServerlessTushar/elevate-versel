import React from "react";
import Image from "next/image";
import StarImg from "../../../public/webp/star.webp";
import BackedByScienceImgMobile from "../../../public/webp/resultsbgmob.webp";
import BackedByScienceImg from "../../../public/webp/get-fitter-today-content-bg.webp";
import feature1 from "../../../public/weight-loss-feature-1.svg";
import feature2 from "../../../public/weight-loss-feature-2.svg";
import feature3 from "../../../public/weight-loss-feature-3.svg";
import feature4 from "../../../public/weight-loss-feature-4.svg";
import { prospectus, epilogue, prospectusBlack } from "@/app/fonts";

const FeaturesWeightLoss = () => {
  const testimonialCards = testimonialsData?.map((testimonial) => {
    return (
      <div key={testimonial?.key} className="flex-1">
        <div className="flex flex-col  bg-white rounded-lg p-2 flex-1 items-center gap-2 border-[0.5px] border-textDarkBlue">
          <Image
            src={testimonial?.icon}
            alt="feature-img"
            className="object-center text-center"
          />
          <div
            className={`text-center text-4xl font-black text-[#163949] ${prospectusBlack.className}`}
          >
            {testimonial?.metric}
          </div>
          <div className={`text-center ${epilogue.className}`}>
            {testimonial?.description}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="h-4 bg-[#f0f6fc]"></div>
      <div className="py-8 pt-16 relative h-72 md:h-[600px] flex items-center justify-center text-center">
        <h3
          className={`font-bold text-3xl md:text-7xl md:w-1/2 text-white ${prospectus.className}`}
        >
          We are backed by science and{" "}
          <span className="text-[#f8d275]">
            proven by
            <br /> results
          </span>
        </h3>
        <Image
          src={BackedByScienceImgMobile}
          className="md:hidden"
          alt={"Backed by Science Mobile"}
          fill
          style={{ zIndex: -1, objectFit: "cover" }}
        />
        <Image
          src={BackedByScienceImg}
          className="hidden md:flex"
          alt={"Backed by Science"}
          fill
          style={{ zIndex: -1, objectFit: "cover" }}
        />
      </div>
      <section className="px-4 py-2  bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-2 md:gap-8 md:flex-row md:-translate-y-24 ">
          {testimonialCards}
        </div>
        <div
          className={`max-w-6xl mx-auto my-2 md:my-0 text-[11px] ${epilogue.className}`}
        >
          * Results may vary for each person participating in the program
        </div>
      </section>
    </div>
  );
};

export default FeaturesWeightLoss;

const testimonialsData = [
  {
    key: 1,
    metric: "2000+",
    description: "happy customers",
    icon: feature1,
  },
  {
    key: 2,
    metric: "15%",
    description: "average weight loss",
    icon: feature2,
  },
  {
    key: 3,
    metric: `4"`,
    description: "average drop in waist line",
    icon: feature3,
  },
  {
    key: 4,
    metric: "9/10",
    description: "recommended to family/friends",
    icon: feature4,
  },
];
