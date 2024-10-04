import ThankYouForm from "@/sections/ThankYouForm/ThankYouForm";
import React, { Suspense } from "react";
import Image from "next/image";
import thankyouHero from "../../../../../public/webp/newbgmobilenew.webp";
import couponImg from "../../../../../public/couponiconnew.svg";
import { epilogue, prospectusSemiBold } from "@/app/fonts";
import { tpFormActions } from "@/utils/formActions";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      <div className="mobile text-overlay">
        <div className="relative h-56 w-full flex justify-center items-center">
          <h1 className="z-10 flex flex-col items-center justify-center ">
            <span
              className={`${prospectusSemiBold.className} text-white text-2xl text-center`}
            >
              Congratulations!
            </span>
            <span
              className={`${prospectusSemiBold.className} text-white text-3xl text-center`}
            >
              You are eligible
            </span>
          </h1>
          <Image
            src={thankyouHero}
            alt="heroimgmobile"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-8 -translate-y-16">
          <div className="bg-[#3881c5] rounded p-4 flex items-center gap-8 mb-4">
            <Image src={couponImg} alt="couponIcon" />
            <h6 className={`${epilogue.className} text-white text-xs`}>
              Get up to <span className="font-bold">15% off</span> <br />
              by simply answering these 6 questions in 30 seconds
            </h6>
          </div>
          <Suspense>
            <ThankYouForm
              formAction={tpFormActions["Allurion"]}
              dropDownName="Dropdown7"
              type="allurion"
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default page;
