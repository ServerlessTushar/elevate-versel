import React from "react";
import heroImg from "../../../public/webp/flay-lay-scale-weights 1.webp";
import Image from "next/image";
import { prospectusBold } from "@/app/fonts";
const OurSolution = () => {
  return (
    <div>
      <div className="bg-black relative flex items-center justify-center">
        <Image
          src={heroImg}
          loading="lazy"
          alt="img"
          className="opacity-30 h-[100px] lg:h-full"
        />
        <h1
          className={`absolute  text-white ${prospectusBold.className} text-2xl lg:text-6xl`}
        >
          Our Solutions
        </h1>
      </div>
    </div>
  );
};

export default OurSolution;
