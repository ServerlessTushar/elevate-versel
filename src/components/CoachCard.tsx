import { prospectusBold } from "@/app/fonts";
import Image, { StaticImageData } from "next/image";
import React from "react";
type TypeCoachData = {
  coachImg: StaticImageData;
  name: string;
  experience: string;
};
const CoachCard = ({ coachImg, experience, name }: TypeCoachData) => {
  return (
    <div className="w-56 flex flex-col items-center bg-[#E9F5FF] p-2 rounded-tr-3xl rounded-bl-3xl   shadow-lg ">
      <div className="w-52  h-56">
        <Image src={coachImg} alt="img" className="" />
      </div>
      <div className="text-center px-4 mt-3">
        <h1 className={`${prospectusBold.className} text-xl`}>{name}</h1>
        <p className="text-sm">{experience}</p>
      </div>
    </div>
  );
};

export default CoachCard;
