import React from "react";
import footerLogo from "../../../public/footerlogo.svg";
import Image from "next/image";
import { epilogue } from "@/app/fonts";
import yt from "../../../public/webp/yt.webp";
import fb from "../../../public/webp/fb.webp";
import ins from "../../../public/webp/in.webp"
const Footer = () => {
  return (
    <div className="bg-[#163949]">
      <footer
        className={`${epilogue.className} max-w-7xl mx-auto px-4 py-2 flex flex-col items-center bg-[#163949] text-white text-opacity-75 `}
      >
        <div className=" w-[200px] lg:w-full flex justify-center my-8">
          <Image
            src={footerLogo}
            height={300}
            width={300}
            alt="footer-logo"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col lg:flex-row  gap-6 lg:gap-28 mt-4 pb-8 border-b-[1px] border-white border-opacity-20   px-8">
          <div className="flex text-xs gap-11 lg:items-center">
            <p className="text-[#ea6f54] " >Follow us</p>
            <div className="flex gap-3">
              {footerIcons.map((data, idx) => {
                return (
                  <a className="flex" key={idx} href={data.link}>
                    <Image
                      src={data.icon}
                      alt="footer-icons"
                      loading="lazy"
                      className="object-contain"
                    />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex  text-xs gap-6 lg:items-center">
            <p className="text-[#ea6f54] ">For enquiries</p>
            <div className="flex flex-col">
              <a href="mailto:info@joinelevatenow.com">
                info@joinelevatenow.com
              </a>
              <a href="tel:+91-8006890068">+91-8006890068</a>
            </div>
          </div>
          <div className="flex text-sm gap-12 lg:gap-6 lg:items-center">
            <p className=" lg:w-12  w-32 md:w-11  text-[#ea6f54] text-xs">
              Visit us
            </p>
            <p className="lg:w-96 text-xs md:w-56 ">
              Enlight Now Healthcare Pvt Ltd Cowrks, WorldMark 1, Tower A,
              Aerocity, Delhi - 110037
            </p>
          </div>
        </div>
        <div className="text-xs lg:text-sm flex gap-6 my-6 mb-20 md:my-6 ">
          <a href="https://www.joinelevatenow.com/terms-of-use">Terms & Conditions</a>
          <a href="https://www.joinelevatenow.com/privacy-policy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
const footerIcons = [
  {
    link: "https://www.facebook.com/joinelevatenow/",
    icon: require("../../../public/fb.svg"),
  },
  {
    link: "https://www.youtube.com/@joinelevatenow",
    icon: require("../../../public/yt.svg"),
  },
  {
    link: "https://www.instagram.com/join.elevate.now/",
    icon: require("../../../public/in.svg"),
  },
];