import React from "react";
import HeroText from "./HeroText";
import HeaderMetric from "./HeaderMetric";
import Image from "next/image";
import RecommendationBadge from "../../../public/webp/docCircle.webp";
import { epilogue } from "@/app/fonts";
const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto w-full relative ">
      <div className="absolute top-0 left-2/3 md:translate-x-1/2 -translate-y-10 ">
        <Image
          src={RecommendationBadge}
          className="rounded-full md:hidden"
          style={{ height: 80, width: "auto" }}
          alt="gif"
        />
        <Image
          src={RecommendationBadge}
          className="rounded-full hidden md:flex"
          style={{ height: 120, width: "auto" }}
          alt="gif"
        />
      </div>

      <section className="px-4 py-2 max-w-7xl">
        <HeroText />
      </section>
      <div className="md:hidden absolute top-0 w-full -z-30">
        {/* <Image
          src={HeroImgMobile}
          alt="Hero Image"
          loading="eager"
          priority={true}
          quality={30}
          style={{ width: 400, height: "auto" }}
        /> */}

        <Image
          src={"https://assets.joinelevatenow.com/public/webp/mobile-g-bg.webp"}
          alt="Hero Image"
          loading="eager"
          priority={true}
          quality={30}
          width={300}
          height={240}
          style={{ width: 400, height: "auto" }}
        />
      </div>
      <div className="px-4 max-w-9xl bg-white md:bg-transparent pb-2 -translate-y-2">
        <HeaderMetric />
        <p
          className={`${epilogue.className} text-textDarkBlue text-[8px] md:text-lg my-1`}
        >
          *Results may vary for each person participating in the program
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
