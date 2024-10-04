"use client";
import { epilogueSemiBold, prospectus, prospectusBold } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import ThankTouHeroCard from "./ThankTouHeroCard";
import ThankYouButton from "./ThankYouButton";
import FloatingImageCard from "./FLoatingImageCard";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { decrypt } from "@/utils/encryption";
import { tpFormActions } from "@/utils/formActions";

const ThankYou = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const phone = searchParams.get("hp") ?? "";
  const name = searchParams.get("hn") ?? "";
  // const decryptedPhone = decrypt(phone);
  // const decryptedName = decrypt(name);
  const sourceRoute = "/Allurion/thank-you";
  const handleContinueWithAllurion = () => {
    const queryString = new URLSearchParams({
      hp: phone,
      hn: name,
      withoutInsurance: "true",
      source: sourceRoute
    }).toString();
    router.push(`/pp/Allurion/thank-you-eligible-coupon?${queryString}`);
  };

  const handleMedicalPlans = () => {
    router.push(`/medical-weight-loss`);
  };
  return (
    <div>
      <div className="lg:w-full relative h-[150px] md:h-[400px] flex items-center">
        <Image
          src={require("../../../public/top-view-fruits-line 1.png")}
          alt="img"
          fill
          objectFit="contain"
        />
        <div className="z-[999] absolute w-full flex flex-col items-center text-[#16394A]">
          <p className={`${prospectusBold.className} lg:text-7xl`}>
            Congratulations!{" "}
          </p>
          <p className={`${prospectus.className} lg:text-5xl lg:mt-4`}>
            You are eligible for the program{" "}
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 p-6">
        <ThankTouHeroCard />
        <div className=" flex-wrap lg:w-[800px] flex justify-center gap-8 py-8">
          <ThankYouButton
            text="Continue with Allurion"
            onClick={handleContinueWithAllurion}
          />
          <ThankYouButton
            text="Elevate Now's Medical Plans"
            onClick={handleMedicalPlans}
          />
          <Link
            href="tel:+91-8006890068"
            className={`${epilogueSemiBold.className} bg-[#FFDE78] text-sm lg:text-xl p-4 rounded-lg  text-[#163949] px-8 w-[350px] text-center shadow-lg`}
          >
            Call An Expert Now!
          </Link>
        </div>
        <FloatingImageCard />
      </div>
    </div>
  );
};

export default ThankYou;
