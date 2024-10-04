import React from "react";
import HeroText from "../HeroSection/HeroText";
import HeaderMetric from "../HeroSection/HeaderMetric";
import Image from "next/image";
import RecommendationBadge from "../../../public/webp/docCircle.webp";
import heroImg from "../../../public/weight-loss-hero-img.webp";
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

      <section className="px-4 pb-8 max-w-7xl">
        <HeroText />
      </section>
      <div className="md:hidden absolute py-2 top-0 w-full -z-30 h-80">
        <Image
          src={heroImg}
          alt="Hero Image"
          loading="eager"
          priority={true}
          quality={30}
          width={400}
          height={300}
          style={{ width: 400, height: "auto" }}
        />
      </div>
      <div className="px-4 max-w-9xl bg-white md:bg-transparent pb-2 -translate-y-8">
        <HeaderMetric />
      </div>
    </div>
  );
};

export default HeroSection;
