import React from "react";
import Image from "next/image";
import { epilogue, epilogueBold } from "@/app/fonts";

interface ImageTextCardProps {
  img: any;
  title: string;
  disc: string;
}

const ImageTextCard: React.FC<ImageTextCardProps> = ({ img, title, disc }) => {
  return (
    <div className="bg-[#BEDFFF] flex flex-row rounded-xl shadow-xl mx-8 mb-4 p-6 gap-6">
      <div className="md:rounded-lg">
        <Image src={img} alt="Card Img" width={532} height={570} />
      </div>
      <div>
        <h4
          className={`${epilogueBold.className} text-base font-bold md:text-4xl mb-4`}
        >
          {title}
        </h4>
        <p className={`text-sm md:text-2xl ${epilogue.className}`}>{disc}</p>
      </div>
    </div>
  );
};

export default ImageTextCard;
