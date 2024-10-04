import React from "react";
import Image from "next/image";
import { prospectus, epilogue } from "@/app/fonts";
import BackedByScienceImgMobile from "../../../../public/webp/resultsbgmob.webp";
import BackedByScienceImg from "../../../../public/BackedByScienceAllurianImg.webp";
import testiImg1 from "../../../../public/testimage1.webp";
import testiImg2 from "../../../../public/testimage2.webp";
import testiImg3 from "../../../../public/testimage3.webp";

const WeightLossTestimonials = () => {
  const testimonialCards = testimonialsData?.map((testimonial, index) => {
    return (
      <div key={index} className="relative">
        <div className="flex flex-col  bg-white rounded-lg shadow-lg p-2 md:p-4 md:h-[350px] w-72">
          <div className="flex justify-between">
            <div className="flex gap-2 my-2  w-full">
              <div className="flex flex-col  w-full">
                <div>
                  <p className="font-semibold text-lg mb-4">
                    {testimonial?.name}
                  </p>
                  <p className="text-xs">{testimonial?.desc}</p>
                </div>
                <div className="w-full flex mt-3 relative ">
                  <Image
                    src={testimonial.color}
                    alt="bannerImg"
                    loading="lazy"
                  />
                  <p className="absolute -bottom-1 text-[10px] bg-white pr-4 ">
                    4 months ago
                  </p>
                  <p className="absolute -bottom-1 right-[55px] md:right-[45px]  text-[10px] bg-white px-4 ">
                    4 months later
                  </p>
                </div>
                <p className={`${epilogue.className} text-sm my-4`}>
                  {testimonial.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="h-4 bg-[#f0f6fc]"></div>
      <div className="py-8 pt-16 relative h-72 md:h-[600px] flex items-center justify-center text-center">
        <h3
          className={`font-bold text-3xl md:text-7xl md:w-1/2 text-white ${prospectus.className}`}
        >
          We are backed by science and{" "}
          <span className="text-[#f8d275]">
            proven by
            <br /> results
          </span>
        </h3>
        <Image
          src={BackedByScienceImgMobile}
          className="md:hidden"
          alt="Backed by Science Mobile"
          fill
          style={{ zIndex: -1, objectFit: "cover" }}
          loading="lazy"
        />
        <Image
          src={BackedByScienceImg}
          className="hidden md:flex"
          alt="Backed by Science"
          fill
          style={{ zIndex: -1, objectFit: "cover" }}
          loading="lazy"
        />
      </div>
      <div className="h-4 bg-primaryBlue"></div>
      <section className="px-4 py-8 lg:py-0 bg-primaryBlue">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12 md:flex-row md:-translate-y-24 items-center justify-center flex-wrap">
          {testimonialCards}
        </div>
      </section>
    </div>
  );
};

export default WeightLossTestimonials;
const testimonialsData = [
  {
    color: testiImg1,
    name: "Sanchita Shah",
    desc: "Age 31, BMI 30.4",
    text: "“I could shine with the WOW factor at the wedding because Elevate Now helped me achieve it”",
  },
  {
    color: testiImg2,
    name: "Krati",
    desc: "Age 27, BMI 32",
    text: "“Losing weight with PCOS was next to impossible. Elevate Now did the magic”",
  },
  {
    color: testiImg3,
    name: "Manthan Prajapati",
    desc: "Age 36, BMI 31",
    text: "“Post-pregnancy weight loss felt impossible. Elevate Now was the best choice”    ",
  },
];
