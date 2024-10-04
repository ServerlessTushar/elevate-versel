import Image from "next/image";
import React from "react";
import weightLossImage from "../../../../public/Allurion/bottom1.webp";
import weightLossImageMob from "../../../../public/Allurion/elevating-mobile.webp";

const ElevatingWeightLoss = () => {
  return (
    <div className="md:mx-2 md:mx-40 py-8 relative h-80 lg:h-[80vh]  flex items-center justify-center text-center">
      <h3 className="font-bold text-3xl  text-white lg:text-7xl  ">
        <span className="text-[#f8d275]"> Elevating </span>your <br />
        weight loss journey
      </h3>
      <Image
        src={weightLossImageMob}
        loading="lazy"
        alt={"Backed by Science"}
        fill
        style={{ zIndex: -1, objectFit: "contain" }}
        className="lg:hidden"
      />

      <Image
        src={weightLossImage}
        loading="lazy"
        alt={"Backed by Science"}
        height={1200}
        width={1400}
        className="absolute -z-10 hidden lg:block"
      />
    </div>
  );
};

export default ElevatingWeightLoss;
