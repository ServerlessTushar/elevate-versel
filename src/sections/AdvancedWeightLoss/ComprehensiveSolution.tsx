import React from "react";
import ImageTextCard from "@/components/ImageTextCard";
import doctorImg from "../../../public/advanced-weight-loss/web/webp/output_image 1.webp";
import cgmImg from "../../../public/advanced-weight-loss/web/webp/image 13.webp";
import bloodTestImg from "../../../public/advanced-weight-loss/web/webp/Mask group.webp";
import seniorCoachImg from "../../../public/advanced-weight-loss/web/webp/image 12.webp";
import bloodTestImg1 from "../../../public/advanced-weight-loss/mob/webp/Mask group (2).webp";
import seniorCoachImg1 from "../../../public/advanced-weight-loss/mob/webp/Mask group (3).webp";
import doctorImg1 from "../../../public/advanced-weight-loss/mob/webp/Mask group.webp";
import cgmImg1 from "../../../public/advanced-weight-loss/mob/webp/Mask group (1).webp";
import { prospectusBold } from "@/app/fonts";

export default function ComprehensiveSolution() {
  return (
    <div className="mt-24 mb-8 max-w-7xl mx-auto">
      <h1
        className={`${prospectusBold.className} text-2xl md:text-6xl font-bold text-center mb-8`}
      >
        Comprehensive solution for best results
      </h1>
      <div className="hidden md:grid md:grid-cols-2 md:gap-4">
        {ComprehensiveSolutionData.map((solution) => (
          <ImageTextCard
            key={solution.id}
            img={solution.img}
            title={solution.title}
            disc={solution.disc}
          />
        ))}
      </div>
      <div className="flex flex-col md:hidden">
        {ComprehensiveSolutionDataMobile.map((solution) => (
          <ImageTextCard
            key={solution.id}
            img={solution.img}
            title={solution.title}
            disc={solution.disc}
          />
        ))}
      </div>
    </div>
  );
}

const ComprehensiveSolutionData = [
  {
    id: 1,
    title: "Blood test",
    disc: "Identify and track health metrics influencing your weight. You will see a remarkable difference in all parameters. Set goals with real data",
    img: bloodTestImg1,
  },
  {
    id: 2,
    title: "Expert doctor",
    disc: "Address a medical problem with a medical expert who understands your body. Why trust the rest when you have the best?",
    img: doctorImg1,
  },
  {
    id: 3,
    title: "Senior coaches",
    disc: "Your new buddy creates diet plans and workouts based c your body type, routine & preferences. Afterall, real friends give real motivation",
    img: seniorCoachImg1,
  },
  {
    id: 4,
    title: "CGM device",
    disc: "Seamless, pain-free and real time glucose monitoring to eliminate food items that aid weight gain, resulting in faster results.",
    img: cgmImg1,
  },
];

const ComprehensiveSolutionDataMobile = [
  {
    id: 1,
    title: "Expert doctor",
    disc: "Address a medical problem with a medical expert who understands your body. Why trust the rest when you have the best?",
    img: doctorImg1,
  },
  {
    id: 2,
    title: "Senior coaches",
    disc: "Your new buddy creates diet plans and workouts based c your body type, routine & preferences. Afterall, real friends give real motivation",
    img: seniorCoachImg1,
  },
  {
    id: 3,
    title: "Blood test",
    disc: "Identify and track health metrics influencing your weight. You will see a remarkable difference in all parameters. Set goals with real data",
    img: bloodTestImg1,
  },
  {
    id: 4,
    title: "CGM device",
    disc: "Seamless, pain-free and real time glucose monitoring to eliminate food items that aid weight gain, resulting in faster results.",
    img: cgmImg1,
  }
];
