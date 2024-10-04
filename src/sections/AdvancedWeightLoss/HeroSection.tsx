import React from "react";
import Image from "next/image";
import HeroImg from "../../../public/advanced-weight-loss/web/webp/Hero Image.webp";
import HeroImgMob from "../../../public/advanced-weight-loss/mob/webp/Hero Image - Mobile.webp";
import AdvancedHeaderMetric from "./AdvancedHeaderMetric";
import { prospectusBold } from "@/app/fonts";

function HeroSection() {
  return (
    <div className="relative">
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
          <Image
            src={HeroImg}
            alt="advanced weight loss hection section Desktop Img"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute top-16 left-20 max-w-[40%]">
          <h1
            className={`text-3xl lg:text-8xl font-bold mb-6 md:mb-10 ${prospectusBold.className} text-[#16394A]`}
          >
            Your partner in your weight loss journey
          </h1>
          <AdvancedHeaderMetric />
          <p className="text-xs text-white mt-2">
            *Results may vary for each person participating in the program
          </p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative md:hidden">
        <div className="relative">
          <Image
            src={HeroImgMob}
            alt="advanced weight loss hection section Desktop Img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-4 left-0 text-center px-8">
          <h1
            className={`text-[35px] leading-[35px] text-[#16394A] ${prospectusBold.className}`}
          >
            Your partner in your weight loss journey
          </h1>
        </div>
        <div className="absolute inset-x-0 -bottom-16 flex justify-center items-center flex-col">
          <AdvancedHeaderMetric />
          <p className="text-xs text-black mt-2">
            *Results may vary for each person participating in the program
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
