import React from "react";
import HeroText from "./HeroText";
import HeaderMetric from "./HeaderMetric";
import HeroImgMobile from "../../../../public/Allurion/mobilebannerview11.webp";
import Image from "next/image";
import HeroImg from "../../../../public/Allurion/backgroundbanner1.webp";
import NewBannerImg1 from "../../../../public/Allurion/newbannerimg1.webp";
import NewBannerImg2 from "../../../../public/Allurion/newbannerimg2.webp";
const HeroSection = () => {
  return (
    <div className="w-full mx-auto relative -mb-20 md:mb-0">
      <div className="hidden md:block inset-0">
        <Image src={HeroImg} fill priority quality={30} alt={"Hero Image"} />
      </div>

      <div className="md:hidden absolute top-0 w-full h-[400px]">
        <Image
          src={HeroImgMobile}
          fill
          quality={30}
          priority
          alt={"Mobile Hero Image"}
        />
      </div>
      <section className="md:pl-12 md:pr-4 px-4 py-2 relative z-2 max-w-7xl">
        <HeroText />
      </section>
      <div className="md:pl-20 md:pr-4 px-4 py-2 gap-6 z-2 md:flex md:flex-row md:items-center relative">
        <HeaderMetric />
        <div className="hidden md:flex md:flex-row">
          <Image
            src={NewBannerImg2}
            objectFit="cover"
            width={140}
            height={140}
            alt={"New Banner Img2"}
            priority
          />
          <Image
            src={NewBannerImg1}
            objectFit="cover"
            width={140}
            height={140}
            alt={"New Banner Img1"}
            priority
          />
        </div>
        <div className="relative bottom-32  md:hidden  flex justify-end">
          <div className="flex flex-row">
            <Image
              src={NewBannerImg2}
              objectFit="cover"
              width={75}
              height={75}
              alt={"New Banner Img2"}
              loading="lazy"
            />
            <Image
              src={NewBannerImg1}
              objectFit="cover"
              width={75}
              height={75}
              alt={"New Banner Img1"}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
