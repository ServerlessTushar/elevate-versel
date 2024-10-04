"use client";
import BrandDivider from "@/components/BrandDivider";
import Image from "next/image";
import React from "react";
import zeeImage from "../../../public/webp/zeebusiness.webp";
import startupImage from "../../../public/webp/startup.webp";
import bussinessImage from "../../../public/webp/businessworld.webp";
import outLookImage from "../../../public/webp/outlook.webp";
import indianWebImage from "../../../public/webp/indianweb.webp";
import feminaImage from "../../../public/femina-logo 1.svg";
import newsNow from "../../../public/News9live-logo_1_300x 1.svg";

import BrandImageMobile from "./BrandImageMobile";
import { usePathname } from "next/navigation";
const BrandImage = () => {
  const currentPage = usePathname();
  console.log(currentPage);
  return (
    <div className="bg-white py-8">
      <div className="hidden md:flex max-w-7xl mx-auto  flex-row  py-2 bg-white ">
        <div className="flex flex-col flex-1 justify-center items-center">
          <Image src={zeeImage} alt="logo" loading="lazy" />
        </div>
        <BrandDivider />
        <div className="flex flex-col flex-1 justify-center items-center">
          <div>
            <Image src={startupImage} alt="logo" loading="lazy" />
          </div>
        </div>
        <BrandDivider />
        <div className="flex flex-col flex-1 justify-center items-center">
          <div className="px-3 bg-blue-60">
            <Image src={bussinessImage} height={20} alt="logo" loading="lazy" />
          </div>
        </div>
        <BrandDivider className="hidden md:block" />
        <div className="md:flex flex-col flex-1 justify-center items-center hidden ">
          <div className="h- bg-blue-60">
            <Image src={outLookImage} height={100} alt="logo" loading="lazy" />
          </div>
        </div>
        <BrandDivider className="hidden md:block" />
        <div className="md:flex flex-col flex-1 justify-center items-center hidden ">
          <div>
            <Image src={indianWebImage} height={50} alt="logo" loading="lazy" />
          </div>
        </div>

        {currentPage === "/our-solutions" && (
          <>
            <BrandDivider className={`hidden md:block`} />
            <div className="md:flex flex-col flex-1 justify-center items-center hidden ">
              <div>
                <Image
                  src={feminaImage}
                  height={80}
                  alt="logo"
                  loading="lazy"
                />
              </div>
            </div>
            <BrandDivider className={`hidden md:block`} />
            <div className="md:flex flex-col flex-1 justify-center items-center hidden ">
              <div>
                <Image src={newsNow} height={80} alt="logo" loading="lazy" />
              </div>
            </div>
          </>
        )}
      </div>
      <BrandImageMobile />
    </div>
  );
};

export default BrandImage;
