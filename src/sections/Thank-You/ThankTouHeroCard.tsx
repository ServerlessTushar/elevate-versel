import { epilogue, epilogueBold } from "@/app/fonts";
import React from "react";

const ThankTouHeroCard = () => {
  return (
    <div className="bg-[#E9F5FF] mt-8 lg:w-[1000px] rounded-xl text-[#163949] p-10 shadow-lg ">
      <div className="flex flex-col items-center text-[#163949]">
        <p className={`${epilogueBold.className}  text-lg lg:text-3xl`}>
          Unfortunately,
        </p>
        <p
          className={`${epilogue.className} lg:text-3xl text-center text-lg   `}
        >
          You will not be eligible for an Insurance Claim*
        </p>
        <p
          className={`${epilogue.className} text-[7px] lg:text-xs mt-2 text-center`}
        >
          *IRDAI only allows insurance claims for obesity treatments for BMI
          35-40 (with comorbidities) and for BMI above 40
        </p>
      </div>
      <p className="lg:text-2xl text-center mt-6 text-sm">
        <span className={`${epilogueBold.className}`}>But worry not,</span> you
        can still proceed with allurion with our discounted packages or chose
        one of our guaranteed medical weight loss plans.
      </p>
    </div>
  );
};

export default ThankTouHeroCard;
