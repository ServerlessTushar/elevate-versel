import React from "react";
import Image from "next/image";
import Newbgmobilenew from "../../../public/webp/thankyoubgnew.webp";
import Newthankyoupagebg from "../../../public/webp/bbbbb.webp";
import NotEligibleQAIcon from "../../../public/webp/noteligible.webp";
import { prospectus, prospectusBold, epilogue } from "@/app/fonts";
import { Phone } from "lucide-react";

function ThankYouNotEligible() {
  return (
    <div className="text-[#163949] mb-20">
      <Image
        src={Newbgmobilenew}
        alt="New bg mobile new image"
        priority
        className="block md:hidden w-full"
      />
      <Image
        src={Newthankyoupagebg}
        alt="New bg mobile new image"
        priority
        className="hidden md:block w-50% rounded-b-lg mx-auto"
      />
      <h2
        className={`${prospectus.className} text-3xl md:text-4xl text-center pt-12 px-8`}
      >
        Unfortunately,{" "}
        <span className={`${prospectusBold.className} text-3xl md:text-4xl`}>
          You are not eligible
        </span>
      </h2>
      <p
        className={`text-center mx-4 mt-2 font-light mb-16 text-base md:text-xl`}
      >
        Thank you for providing us with your details. We will not be able to
        enroll you for the program.
      </p>
      <NotEligibleQA />
      <div className="bg-blue-600 w-[80%] h-[1px] my-4 mx-auto block md:hidden"></div>
      <p
        className={`${epilogue.className} w-3/4 md:text-sm text-base md:w-[60%] mx-auto text-center mb-4`}
      >
        Elevate Now is India’s first doctor-led medical weight loss program
        combining science, technology and expert advise to help you achieve your
        sustainable weight loss goals
      </p>
      <div className="flex flex-row justify-center gap-2 items-center mt-4">
        <Phone className="bg-white rounded-full p-2 w-8 h-8" />
        <a className="text-lg" href="tel:+91-8006890068">
          +91-8006890068
        </a>
      </div>
    </div>
  );
}

function NotEligibleQA() {
  return (
    <div className="bg-[#F2F2F5] rounded-lg w-[80%] md:w-1/2 mx-auto text-sm px-12 md:px-8 pt-12 pb-16 mb-8 relative">
      <div className="absolute -top-14 left-0 right-0 flex justify-center items-center">
        <Image
          src={NotEligibleQAIcon}
          width={100}
          height={100}
          alt="New bg mobile new image"
        />
      </div>
      <p className="text-sm md:text-xl text-center">
        As per our medical guidelines, you do not fulfill the criteria for our
        program. in case of any queries, you can call us at
      </p>
      <div className="flex flex-row justify-center gap-2 items-center mt-4">
        <Phone className="bg-white rounded-full p-2 w-8 h-8" />
        <a className="text-lg" href="tel:+91-8006890068">
          +91-8006890068
        </a>
      </div>
    </div>
  );
}
export default ThankYouNotEligible;
