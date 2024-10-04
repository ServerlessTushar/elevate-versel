import React from "react";
import result1 from "../../../../public/resulticon1.svg";
import result2 from "../../../../public/resulticon2.svg";
import result3 from "../../../../public/resulticon3.svg";
import result4 from "../../../../public/resulticon4.svg";
import result5 from "../../../../public/resulticon5.svg";
import { prospectus } from "../../../app/fonts";
import dynamic from "next/dynamic";
const Accordion = dynamic(() => import("../../../components/Accordion"));

const Features = () => {
  const featureList = features?.map((feature) => (
    <Accordion
      initialValue={false}
      key={feature.title}
      title={feature.title}
      titleIcon={feature.icon}
      content={feature.content}
    />
  ));
  const featureListDesktop = features?.map((feature) => (
    <Accordion
      initialValue={true}
      key={feature.title}
      title={feature.title}
      titleIcon={feature.icon}
      content={feature.content}
    />
  ));
  return (
    <div className="max-w-7xl mx-auto px-4 py-2 mt-20">
      <h2
        className={`text-center font-md my-2 text-textDarkBlue ${prospectus.className} text-xl md:text-3xl font-bold`}
      >
        Combining science, technology &<br /> expert advice for
      </h2>
      <p className="text-center text-3xl md:text-3xl md:my-8 font-bold text-primaryBlue mb-4">
        Guaranteed results
      </p>
      <div className="flex flex-col gap-2 md:hidden">{featureList}</div>
      <div className="gap-2 hidden md:flex ">{featureListDesktop}</div>
    </div>
  );
};

export default Features;

const features = [
  {
    title: "Science backed approach",
    icon: result1,
    content: [
      {
        heading: "EN",
        text: "Holistic approach addressing root cause of weight",
      },
      { heading: "Others", text: "Focuses on calorie counting" },
    ],
  },
  {
    title: "Balanced nutriton",
    icon: result2,
    content: [
      {
        heading: "EN",
        text: "Multiple diet plans based on preference and routine",
      },
      { heading: "Others", text: "Works on calorie deficit, harming the body" },
    ],
  },
  {
    title: "Achievable activity levels",
    icon: result3,
    content: [
      {
        heading: "EN",
        text: "Tailored workout plans based on age and body type",
      },
      { heading: "Others", text: "Intensive exercise regime" },
    ],
  },
  {
    title: "Sustained weight loss",
    icon: result4,
    content: [
      { heading: "EN", text: "Lasting weight loss" },
      { heading: "Others", text: "Short-term weight loss" },
    ],
  },
  {
    title: "Ongoing support",
    icon: result5,
    content: [
      {
        heading: "EN",
        text: "Doctor-led solution supported by senior Health Coaches",
      },
      {
        heading: "Others",
        text: "Only initial guidance and limited coach availability",
      },
    ],
  },
];
