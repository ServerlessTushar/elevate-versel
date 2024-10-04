import React from "react";
import img from "../../public/image 3.png";
import Image, { StaticImageData } from "next/image";
import { prospectusBold } from "@/app/fonts";
type DocCard = {
  expertImage: StaticImageData;
  name: string;
  exp: string;
  degree: string;
};
const ExpertCard = ({ expertImage, name, exp, degree }: DocCard) => {
  return (
    <div className="w-60">
      <div className="rounded-full w-60 h-60  flex justify-center items-center ">
        <Image src={expertImage} alt="img" className="rounded-full w-52 h-52" />
      </div>
      <div className="bg-[#E9F5FF] text-center rounded-tr-3xl rounded-bl-3xl p-4 py-8 -translate-y-8 shadow-lg ">
        <div>
          <h1 className={`${prospectusBold.className} text-xl text-[#163949]`}>
            {name}
          </h1>
          <p className="text-sm">{exp}</p>
        </div>
        <div className="text-xs mt-2">
          <p>{degree}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
