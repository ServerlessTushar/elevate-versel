import React from "react";
import Image from "next/image";
import zeeImage from "../../../public/webp/zeebusiness.webp";
import startupImage from "../../../public/webp/startup.webp";
import bussinessImage from "../../../public/webp/businessworld.webp";
import outLookImage from "../../../public/webp/outlook.webp";
import indianWebImage from "../../../public/webp/indianweb.webp";
import feminaImage from "../../../public/femina-logo 1.svg";
import newsNow from "../../../public/News9live-logo_1_300x 1.svg";

import { usePathname } from "next/navigation";
const BrandImageMobile = () => {
  const currentPage = usePathname();
  const brandData =
    currentPage === "/our-solutions" ? brandImageOurSolution : brandImageData;

  return (
    <div className="md:hidden w-full inline-flex flex-nowrap overflow-hidden ">
      <ul className="flex items-center justify-center md:justify-start [&li]:mx-4 [&_img]:max-w-none animate-infinite-scroll py-4">
        {brandData?.map((el) => (
          <li
            key={el.title}
            className="flex min-w-[100px] flex-1 justify-center items-center  border-r-primaryOrange border-r-[0.5px] h-12"
          >
            <div>
              <Image
                src={el.image}
                alt={el.title}
                loading="lazy"
                height={80}
                width={80}
              />
            </div>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
        {brandData?.map((el) => (
          <li
            key={el.title}
            className="flex min-w-[100px] flex-1 justify-center items-center border-r-primaryOrange border-r-[0.5px] h-12 "
          >
            <div>
              <Image
                src={el.image}
                alt={el.title}
                loading="lazy"
                height={80}
                width={80}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandImageMobile;

const brandImageData = [
  {
    image: zeeImage,
    title: "zeeImage",
  },
  {
    image: startupImage,
    title: "startupImage",
  },
  {
    image: bussinessImage,
    title: "businessImage",
  },
  {
    image: outLookImage,
    title: "outLookImage",
  },
  {
    image: indianWebImage,
    title: "indianWebImage",
  },
];

const brandImageOurSolution = [
  {
    image: startupImage,
    title: "startupImage",
  },
  {
    image: bussinessImage,
    title: "businessImage",
  },
  {
    image: outLookImage,
    title: "outLookImage",
  },
  {
    image: indianWebImage,
    title: "indianWebImage",
  },
  {
    image: zeeImage,
    title: "zeeImage",
  },
  {
    image: feminaImage,
    title: "feminaImage",
  },
  {
    image: newsNow,
    title: "feminaImage",
  },
];
