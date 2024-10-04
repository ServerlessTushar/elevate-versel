import { epilogueBold } from "@/app/fonts";
import React from "react";
import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <div className="bg-white py-8">
      <div className={`max-w-7xl mx-auto p-2 px-4`}>
        <h1
          className={`${epilogueBold.className} text-2xl lg:text-6xl text-[#163949] text-center`}
        >
          FAQ
        </h1>
        <div className="lg:grid grid-cols-3 gap-6 bg-[#E9F5FF] p-2 flex flex-col items-center mt-6 lg:bg-white">
          {FaqData.map((faq, i) => {
            return <FaqCard key={i} title={faq.title} desc={faq.desc} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
const FaqData = [
  {
    title: "Why does weight loss require a medical approach?",
    desc: "Excess weight could be because of existing metabolic conditions or could have led to undiagnosed illness. Getting the right diagnosis and a plan created for your body by a medical expert is paramount for a holistic solution. ",
  },
  {
    title: "How does the program work?",
    desc: "The weight loss program is scientific yet easy. It requires a basic portion control, at home physical exercises, and improving your sleep schedule with support from our expert coaches to give visible results from the first month itself",
  },
  {
    title: "What all is included in the package?",
    desc: " The package includes a quarterly blood assessments, monthly doctor consultation, weekly consultation with health coaches, and access to our mobile application. ",
  },
  {
    title: "How soon will I see results?",
    desc: " All of our customers who adhere to our guidelines have seen results from the very first month - reduction in weight, improvement in stamina, better sleep and digestion, etc.  ",
  },
  {
    title: "Does this require gyms/external equipments?",
    desc: "All physical activities recommended by our fitness coaches largely dont require any gym memberships or equipment. They are customised based on your preference, age, and past injuries, if any.",
  },
  {
    title: "Who will decide my care plan?",
    desc: "An expert doctor (MD), along with senoir coaches, will create a plan based on your routine, lifestyle, and health goals. All plans are created in alignment with our extensive medical protocols and might include medications as per the doctor. ",
  },
  {
    title: "Is weight loss guaranteed?",
    desc: "Weight loss is guaranteed in specific plans. 100% of our patients who adhere to our guidelines lose weight, sustainably",
  },
  {
    title: "Are medications involved?",
    desc: "Based on your history, blood reports, and plan selected, the expert doctor will recommend a plan that will work best for you.",
  },
  {
    title: "Are medications involved?",
    desc: "Elevate Now is the only doctor-led program in India where the care plan is designed basis your existing metabolic conditions. There are preodic bloos tests and doctor consultations to ensure you get fitter every day. ",
  },
];
