"use client";
import React from "react";
import Image from "next/image";
import { prospectus, prospectusBold } from "@/app/fonts";
import dynamic from "next/dynamic";
import { Stethoscope } from "lucide-react";
import { useRouter } from "next/navigation";
const DoctorsMobile = dynamic(
  () => import("../../../sections/Doctors/DoctorsMobile")
);
const WeightLossDoctors = () => {
  const router = useRouter();
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-10 ">
        <h2
          className={`text-lg text-center font-md my-2 text-[#163949] ${prospectusBold.className} md:text-3xl`}
        >
          Designed by the best for{" "}
        </h2>
        <p
          className={`text-center text-3xl md:text-7xl md:my-8 font-bold text-[#3881C5] ${prospectusBold.className}`}
        >
          Weight Management
        </p>
      </div>
      <div className="hidden lg:flex flex-col">
        <div
          className="bg-[#163949] py-16  w-400px md:flex "
          onClick={() => router.push("/weight-loss-experts")}
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row gap-4 md:justify-center hover:cursor-pointer">
            {doctors?.map((doc, idx) => {
              return (
                <div
                  key={doc.name}
                  className={`lg:w-[300px] md:w-[230px] flex flex-col items-center ${
                    idx !== 2
                      ? "md:border-r-[1px] border-slate-500"
                      : "border-0"
                  }`}
                >
                  <Image src={doc.image} alt={doc.experience} loading="lazy" />
                  <div className="w-full translate-x-9 ">
                    <p className="my-2 font-bold text-lg text-white text-left">
                      {doc.name}
                    </p>
                    <p className="my-2 w-2/3 text-sm text-white text-left">
                      {doc.qualifications}
                    </p>
                    <div className="flex gap-2 items-center">
                      <Stethoscope color="white" size={14} />
                      <p className="my-2 font-bold text-white text-left">
                        {doc.experience}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <DoctorsMobile />
    </div>
  );
};

export default WeightLossDoctors;

export const doctors = [
  {
    name: "Dr Neeta Deshpande",
    qualifications: "Cert Obesity (USA)\nMD, FRCP (Edin), PD Endo\nABSP",
    experience: "30 years of experience",
    image: require("../../../../public/staff1.png"),
  },
  {
    name: "Dr Chaitanya Buva",
    qualifications: "Endocrinology\nMBBS, MD, DM",
    experience: "26 years of experience",
    image: require("../../../../public/staff2.png"),
  },
  {
    name: "Dr Madhur Maheshwari",
    qualifications: "Endocrinology\nMBBS, MD, DM",
    experience: "12 years of experience",
    image: require("../../../../public/staff3.png"),
  },
];
