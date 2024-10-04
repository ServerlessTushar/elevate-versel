import { epilogue, epilogueBold } from "@/app/fonts";
import Image from "next/image";
import React from "react";

const FloatingImageCard = () => {
  return (
    <div className="bg-[#E9F5FF] mt-8 lg:w-[1000px] rounded-xl text-[#163949] p-10 shadow-lg  relative text-center flex flex-col items-center">
      <Image
        src={require("../../../public/floatingEclipse.png")}
        alt="png"
        height={100}
        className="absolute top-0 left-1/2 transform -translate-y-14 -translate-x-1/2"
      />
      <div className="flex flex-col items-center text-[#163949] pt-5">
        <p className={`${epilogueBold.className}  text-lg lg:text-xl`}>
          Did You Know?
        </p>
        <p className={`${epilogueBold.className} text-center text-xl mt-4  `}>
          You can lose weight by sleeping right!
        </p>
      </div>
      <p className="lg:text-xl text-center mt-6 text-sm lg:w-[550px] ">
        Speak to our health expert to learn such tips and tricks for an easy &
        effecting weight loss journey
      </p>
    </div>
  );
};

export default FloatingImageCard;
