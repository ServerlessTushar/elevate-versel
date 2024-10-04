import React from "react";
import nutritionIcon from "../../../public/advanced-weight-loss/image 5.webp";
import movementIcon from "../../../public/advanced-weight-loss/image-6.webp";
import stressIcon from "../../../public/advanced-weight-loss/image-7.webp";
import sleepIcon from "../../../public/advanced-weight-loss/image-8.webp";
import IconTextCard from "@/components/IconTextCard";
import WholeBodyApproachMobile from "./WholeBodyApproachMobile";
import { prospectusBold } from "@/app/fonts";

const WholeBodyApproach = () => {
  return (
    <div className="p-4">
      <div className="bg-[#BEDFFF] rounded-xl  px-12 pb-12 max-w-7xl mx-auto">
        <h1
          className={`text-center text-2xl md:text-6xl py-8 md:py-16 ${prospectusBold.className}`}
        >
          A whole-body approach to health
        </h1>
        <div className="hidden md:grid md:grid-cols-2 md:gap-20">
          {WholeBodyApproachData.map((approach) => (
            <IconTextCard
              key={approach.id}
              img={approach.img}
              title={approach.title}
              disc={approach.disc}
            />
          ))}
        </div>
        <div className="block md:hidden p-2">
          <WholeBodyApproachMobile data={WholeBodyApproachData} />
        </div>
      </div>
    </div>
  );
};

export default WholeBodyApproach;

const WholeBodyApproachData = [
  {
    id: 1,
    img: nutritionIcon,
    title: "Nutrition",
    disc: "Work 1:1 with your health coach to develop and track a diet plan that's built taking into account your personal food choices. Our health coaches help build plans that are sustainable and easy to follow",
  },
  {
    id: 2,
    img: movementIcon,
    title: "Movement",
    disc: "Your health coach works with you to create an easy to follow fitness journey for you basis your personal preferences and mobility levels.",
  },
  {
    id: 3,
    img: stressIcon,
    title: "Stress & Emotional Health",
    disc: "Depending on your unique needs, we furnish you with tools and exercises that help you reduce stress, and improve your emotional health",
  },
  {
    id: 4,
    img: sleepIcon,
    title: "Sleep",
    disc: "Sleep is a critical element to losing weight successfully. Your health coach will help you track your sleep patterns and provide you with tools to help you sleep better.",
  },
];
