import Image from "next/image";
import React from "react";
import weightLossImage from "../../../public/weightloss.png";
import { prospectusBold } from "@/app/fonts";

const ElevatingWeightLoss = () => {
  return (
    <div className="py-8 relative h-48 lg:h-[80vh]  flex items-center justify-center text-center">
      <h3 className="font-bold text-3xl  text-white lg:text-7xl  ">
        <span className={`${prospectusBold.className} text-[#f8d275]`}> Elevating </span>your <br />
        weight loss journey
      </h3>
      {/* <Image
        src={weightLossImage}
        loading="lazy"
        alt={"Backed by Science"}
        fill
        style={{ zIndex: -1, objectFit: "cover" }}
        className="lg:hidden"
      /> */}

      <Image
        src={"https://assets.joinelevatenow.com/public/weightloss.png"}
        loading="lazy"
        alt={"Backed by Science"}
        fill
        style={{ zIndex: -1, objectFit: "cover" }}
        className="lg:hidden"
      />
      <Image
        src={"https://assets.joinelevatenow.com/public/weightloss.png"}
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
