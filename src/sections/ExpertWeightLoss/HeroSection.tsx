"use client";
import Image from "next/image";
import React, { useState } from "react";
import { epilogue, prospectusBold } from "@/app/fonts";
import HeadMetric from "./HeadMatric";
import ConsultationForm from "../ConsultationForm/ConsultationForm";
import { CircleX } from "lucide-react";
import HomePageBanner from "../../../public/Home Page banner.svg";
import HomePageBannerMobile from "../../../public/Home Page banner (1).svg";

const ExpertHeroSection = ({
  fbc,
  fbp,
  formActionLink,
}: {
  fbc?: string;
  fbp?: string;
  formActionLink?: string;
}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal((p) => !p);
  return (
    <div className="relative ">
      <Image
        src={HomePageBanner}
        alt="img"
        fill
        className="hidden lg:block -z-10 h-[80vh]"
        style={{ objectFit: "cover" }}
      />

      <div className="max-w-7xl mx-auto">
        <div className=" relative flex flex-col  w-full items-center p-2 lg:hidden h-[60vh]">
          <h1
            className={`${prospectusBold.className} text-3xl lg:text-6xl w-64 text-center`}
          >
            Your expert <br /> weight loss partner
          </h1>
          <p className="w-64 text-center text-base">
            Lasting weight loss with India’s first doctor-led weight loss
            program
          </p>

          <Image
            src={HomePageBannerMobile}
            alt="img"
            fill
            className="lg:hidden w-full -z-10"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="px-6 bg-white pb-4   shadow-bottom lg:hidden">
          <HeadMetric />
          <p className="text-[8px]">
            *Results may vary for each person participating in the program
          </p>
        </div>
        <div className="hidden top-10 right-8 lg:flex flex-col items-end gap-6 text-[#16394A] max-w-7xl mx-auto">
          <h1
            className={`${prospectusBold.className}  text-8xl text-center text-[#16394A]`}
          >
            Your expert <br /> weight <br />
            loss partner
          </h1>
          <p className="w-96 text-center text-2xl">
            Lasting weight loss with India’s first doctor-led weight loss
            program
          </p>

          <div className="w-1/2 mt-28">
            <HeadMetric />
            <p className="text-[10px] text-end">
              *Results may vary for each person participating in the program
            </p>
          </div>
        </div>

        {/* <div className="flex justify-center bg-white py-6 lg:hidden shadow-xl border-2 border-neutral-100">
          <button
            onClick={toggleModal}
            className={`${epilogue.className} text-[#163949] p-2 px-4 rounded-lg bg-[#F2C94C] font-semibold shadow-lg`}
          >
            Book Free Consultation
          </button>
        </div> */}
        {modal && (
          <div className="absolute z-20 top-10 max-w-[500px]">
            <ConsultationForm
              formLocation="headerform"
              formActionLink={formActionLink}
              fbc={fbc}
              fbp={fbp}
            />
            <div className="h-8 w-8  absolute top-8 right-2 flex justify-center items-center  cursor-pointer">
              <CircleX
                color="#163949"
                className="top-4 absolute right-4 z-40"
                onClick={toggleModal}
              />
            </div>
          </div>
        )}

        {modal && (
          <div
            onClick={toggleModal}
            className="absolute h-[200vh] w-screen bg-black opacity-75 top-0 z-10"
          ></div>
        )}
      </div>
    </div>
  );
};

export default ExpertHeroSection;
