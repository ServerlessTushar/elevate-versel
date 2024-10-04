import React from "react";
import Image, { StaticImageData } from "next/image";
import weightBanner1 from "../../../public/weight-loss-banner-1.webp";
import doctorGuarantee from "../../../public/doctor-guarantee.webp";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";
import { epilogue } from "@/app/fonts";
const WeightLossHero = () => {
  return (
    <div className="max-w-7xl mx-auto w-full relative flex justify-center items-center">
      <div className="flex flex-col md:flex-row md:gap-6">
        {weightLossBlockData.map((item, index) => {
          return (
            <WeightLossBlock
              quote={item.quote}
              imageUrl={item.image}
              impactList={item.impactList}
              name={item.name}
              profession={item.profession}
              stats={item.stats}
              key={index}
              colors={item.colors}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WeightLossHero;

const WeightLossBlock = ({
  quote,
  imageUrl,
  impactList,
  name,
  profession,
  stats,
  colors,
}: {
  quote: string;
  imageUrl: StaticImageData;
  impactList: string[];
  name: string;
  profession: string;
  stats: string;
  colors: string[];
}) => {
  return (
    <div className={`${epilogue.className}`}>
      <div
        className={`p-2  flex flex-row justify-center items-center`}
        style={{ backgroundColor: colors[0] }}
      >
        <div className="flex-1">
          <Image src={imageUrl} alt="banner1" priority={true} />
        </div>
        <div className="px-4 gap-8 flex-1">
          <p
            className={
              name === "Sanchita Shah" ? `text-white` : `text-textDarkBlue`
            }
          >
            {`"${quote}"`}
          </p>
          <Minus color="#EA6F54" size={30} />
          <p
            className={
              name === "Sanchita Shah"
                ? `text-white  font-semibold md:text-xl`
                : `text-textDarkBlue font-semibold`
            }
          >
            {name}
          </p>
          <p
            className={
              name === "Sanchita Shah"
                ? `text-white md:text-lg`
                : `text-textDarkBlue`
            }
          >
            {profession}
          </p>
          <p
            className={
              name === "Sanchita Shah"
                ? `text-white md:text-lg`
                : `text-textDarkBlue`
            }
          >
            {stats}
          </p>
        </div>
      </div>
      <div
        className="p-2 flex flex-row justify-between items-center"
        style={{ backgroundColor: colors[1] }}
      >
        <ul>
          {impactList.map((item, idx) => {
            return (
              <li
                className={
                  "text-white flex items items-center gap-2 text-[13px]"
                }
                key={item}
              >
                {idx == 0 ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
                {item}
              </li>
            );
          })}
        </ul>
        <div>
          <Image src={doctorGuarantee} alt="doctor-guarantee" width={110} />
        </div>
      </div>
    </div>
  );
};

const weightLossBlockData = [
  {
    key: 1,

    image: weightBanner1,
    quote:
      "I could shine with the wow factor at the wedding because Elevate Now helped me achieve it",
    impactList: [
      'Reduced waistline by 4"',
      "Increased energy levels",
      "Increased confidence",
    ],
    name: "Sanchita Shah",
    profession: "Indian Startup",
    stats: "Age 31, BMI 30.4",
    colors: ["#3881c5", "#256caf"],
  },
];
