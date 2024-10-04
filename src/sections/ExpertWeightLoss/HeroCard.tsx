"use client";
import {
  epilogue,
  epilogueBold,
  prospectus,
  prospectusBold,
} from "@/app/fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const HeroCard = () => {
  const router = useRouter();

  return (
    <div className="p-4">
      <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 w-80 md:w-[600px] lg:w-[1100px] relative">
        <div>
          <h1 className={`${prospectusBold.className} text-lg lg:text-6xl`}>
            Doctor-led therapeutic plan
          </h1>
          <p className="text-xs lg:text-2xl">
            ~ 15-18% WEIGHT LOSS IN 6 MONTHS
          </p>
        </div>
        <p className="w-52 text-xs lg:text-2xl lg:w-[70%]">
          A revolutionary program that addresses the root cause of your weight
          by combining doctor-guided therapeutic interventions with habit
          coaching - easy to follow nutritional guidance, fitness techniques and
          stress management.
        </p>
        <p className={`${epilogueBold.className} text-xs lg:text-xl`}>
          Medicine Assisted. Sustainable Habits. Precision Nutrition
        </p>
        <button
          className="rounded-lg bg-[#F2C94C] p-1 px-4 w-32 text-[#163949] lg:w-44 lg:text-xl"
          onClick={() => router.push("/medical-weight-loss")}
        >
          Know more
        </button>
        <Image
          src={require("../../../public/image 9.png")}
          alt="img"
          className="absolute top-12 -right-6 lg:-right-20 rounded-2xl w-24 shadow-2xl lg:w-64"
        />
      </div>
    </div>
  );
};

export default HeroCard;
