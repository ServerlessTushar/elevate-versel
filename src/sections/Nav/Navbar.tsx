"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/webp/logo.webp";
import dynamic from "next/dynamic";
import { epilogue } from "@/app/fonts";
import { CircleX } from "lucide-react";
import { formActions } from "@/utils/formActions";
const ConsultationForm = dynamic(
  () => import("../../sections/ConsultationForm/ConsultationForm")
);
function Navbar({
  fbc,
  fbp,
  formActionLink,
}: {
  fbc?: string;
  fbp?: string;
  formActionLink?: string;
}) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal((p) => !p);
  return (
    <div className="relative ">
      <nav className="px-0 pr-4 py-2 md:py-4 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 bg-white ">
          <div className="flex justify-between">
            <div className="logo md:hidden">
              <Image
                src={logo}
                alt="Logo"
                style={{ height: "auto", width: 170 }}
              />
            </div>
            <div className="logo hidden md:flex">
              <Image src={logo} alt="Logo" height={240} width={240} />
            </div>
            <div className="md:flex hidden ">
              <button
                onClick={toggleModal}
                className={`${epilogue.className} text-textDarkBlue p-2 px-16 rounded-lg bg-default-gradient font-semibold `}
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </nav>
      {modal && (
        <div className="absolute z-20 left-1/2 -translate-x-1/2 max-w-[500px]">
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
  );
}

export default Navbar;
