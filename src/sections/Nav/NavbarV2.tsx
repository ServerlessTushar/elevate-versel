"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/webp/logo.webp";
import dynamic from "next/dynamic";
import { epilogue, epilogueSemiBold } from "@/app/fonts";
import { CircleX } from "lucide-react";
import { formActions } from "@/utils/formActions";
import Link from "next/link";
import { useRouter } from 'next/navigation'
const ConsultationForm = dynamic(
  () => import("../../sections/ConsultationForm/ConsultationForm")
);
function NavbarV2({
  fbc,
  fbp,
  formActionLink,
  isV3,
}: {
  fbc?: string;
  fbp?: string;
  formActionLink?: string;
  isV3?: boolean;
}) {
  const [modal, setModal] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const router = useRouter()
  const toggleModal = () => setModal((p) => !p);
  const handleClick = () => router.push("https://blog.joinelevatenow.com/website-eligibility")
  return (
    <div className="relative">
      <nav className="px-0 pr-4 py-2 md:py-4 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 bg-white">
          <div className="flex justify-between">
            <div className="logo md:hidden">
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt="Logo"
                  style={{ height: "auto", width: 170 }}
                />
              </Link>
            </div>
            <div className="logo hidden md:flex">
              <Link href={"/"}>
                <Image src={logo} alt="Logo" height={240} width={240} />
              </Link>
            </div>

            <div className="lg:flex hidden gap-10">
              {
                isV3 ? (
                  <ul
                    className={`${epilogueSemiBold.className} flex items-center gap-10 text-lg text-[#163949]`}
                  >
                    <li className="hover:text-[#FFDE78]">
                      <Link href={"https://blog.joinelevatenow.com/#how-its-work"}> How It Works</Link>
                    </li>
                    <li className="hover:text-[#FFDE78]">
                      <Link href={"https://blog.joinelevatenow.com/about-us"}> About Us</Link>
                    </li>
                    <li className="hover:text-[#FFDE78]">
                      <Link href={"https://blog.joinelevatenow.com/blog"}>
                        Blogs
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <ul
                    className={`${epilogue.className} flex items-center gap-4 text-xl text-[#163949]`}
                  >
                    <li className="hover:text-[#FFDE78]">
                      <Link href={"/medical-weight-loss"}> Our Solutions</Link>
                    </li>
                    <li className="hover:text-[#FFDE78]">
                      <Link href={"/weight-loss-experts"}> Our Experts</Link>
                    </li>
                    <li className="hover:text-[#FFDE78]">
                      <Link href={"https://www.joinelevatenow.com/blog/"}>
                        Blogs
                      </Link>
                    </li>
                  </ul>
                )
              }
              <button
                onClick={isV3 ? handleClick : toggleModal}
                className={`${epilogue.className} bg-[#FFDE78] hover:bg-gray-400 hover:text-white cursor-pointer text-textDarkBlue p-2 px-16 rounded-lg bg-default-gradient font-semibold `}
              >
                {isV3 ? "Am I Eligible?" : "Book Free Consultation"}
              </button>
            </div>
            <div
              className="lg:hidden flex flex-col gap-1 items-center  rounded-lg justify-center hover:cursor-pointer"
              onClick={() => setHamburger(!hamburger)}
            >
              <div className="w-6 h-[2px] bg-black rounded-lg"></div>
              <div className="w-6 h-[2px] bg-black rounded-lg"></div>
              <div className="w-6 h-[2px] bg-black rounded-lg"></div>
            </div>
          </div>
        </div>
      </nav>
      {hamburger && (
        <div className="bg-white h-full w-full ">
          <ul
            className={`flex flex-col items-center ${epilogue.className} text-[#163949]`}
          >
            <li className="border-b-[1px] border-black w-full text-center  p-4">
              <Link href={"/medical-weight-loss"}> Our Solutions</Link>
            </li>
            <li className="border-b-[1px] border-black w-full text-center p-4">
              <Link href={"/weight-loss-experts"}> Our Experts</Link>
            </li>
            <li className="p-4">
              <Link href={"https://www.joinelevatenow.com/blog/"}>Blogs</Link>
            </li>
          </ul>
        </div>
      )}
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

export default NavbarV2;
