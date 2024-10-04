import { epilogueSemiBold } from "@/app/fonts";
import React from "react";
type buttonProps = {
  text: string;
  onClick: any;
};
const ThankYouButton = ({ text, onClick }: buttonProps) => {
  return (
    <button
      className={`${epilogueSemiBold.className} bg-[#FFDE78] text-sm lg:text-xl p-4 rounded-lg  text-[#163949] px-8 w-[350px] shadow-lg`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ThankYouButton;
