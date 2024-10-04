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

const HeroLeftCard = () => {
  const router = useRouter();

  return (
    <div className="p-4 relative flex justify-end">
      <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 w-80 lg:w-[1100px] md:w-[600px] items-end relative ">
        <div>
          <h1 className={`${prospectusBold.className} text-lg lg:text-6xl`}>
            Allurion gastric balloon
          </h1>
          <p className="text-xs text-end lg:text-2xl">
            - 10-15% weight loss in 16 weeks
          </p>
        </div>
        <p className="w-60 text-end text-xs lg:text-2xl lg:w-[70%]">
          The Allurion Programme is a holistic gastric balloon & behavioural
          change programme designed to help you achieve fast, sustainable weight
          loss and better long-term health.
        </p>
        <p className={`${epilogueBold.className} text-xs lg:text-xl`}>
          No surgery. No endoscopy.No anaesthesia.
        </p>
        <button
          className="rounded-lg bg-[#F2C94C] p-1 px-4 w-32 text-[#163949] lg:w-44 lg:text-xl"
          onClick={() => router.push("/Allurion")}
        >
          Know more
        </button>
        <Image
          src={require("../../../public/Rectangle 397.png")}
          alt="img"
          className="absolute rounded-2xl w-24  lg:w-64 -left-8 lg:-left-20 top-12 "
        />
      </div>
    </div>
  );
};

export default HeroLeftCard;
