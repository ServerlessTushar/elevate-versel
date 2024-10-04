import { prospectus, prospectusBold } from "@/app/fonts";
import Image, { StaticImageData } from "next/image";
import React from "react";
type DocCard = {
  docImage: StaticImageData;
  name: string;
  exp: string;
  degree: string;
};
const DoctorCard = ({ docImage, name, exp, degree }: DocCard) => {
  return (
    <div className="w-60  flex flex-col items-center gap-4">
      <Image src={docImage} alt="img" className="rounded-full w-56 h-56" />
      <div className="text-center text-[#163949]">
        <h1 className={`${prospectusBold.className} text-lg`}>{name} </h1>
        <p className={`${prospectus.className} `}>{exp}</p>
        <p>{degree}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
