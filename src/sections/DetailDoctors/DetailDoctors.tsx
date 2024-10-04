import { prospectusBold } from "@/app/fonts";
import CoachCard from "@/components/CoachCard";
import DoctorCard from "@/components/DoctorCard";
import ExpertCard from "@/components/ExpertCard";
import doc4 from "../../../public/docNeti1.png";
import doc2 from "../../../public/image 4.png";
import doc3 from "../../../public/image 7.png";
import expert1 from "../../../public/expert1.svg";
import expert2 from "../../../public//expert2.svg";
import expert3 from "../../../public/expert3.svg";
import expert4 from "../../../public/expert4.svg";
import React from "react";

const DetailDoctors = () => {
  return (
    <div className="bg-white">
      <div className={`max-w-7xl mx-auto p-4 py-8 pb-8`}>
        <h1
          className={`${prospectusBold.className} text-3xl lg:text-6xl text-center lg:py-4 text-[#163949] py-16`}
        >
          Clinical advisory
        </h1>
        <div className="bg-[#d4ebff] rounded-lg  lg:flex-row  p-6 py-10 items-center ">
          <div className="-translate-y-20 lg:flex flex flex-col lg:flex-row items-center lg:-translate-y-0 justify-evenly w-full gap-6">
            <DoctorCard
              docImage={doc4}
              name="Dr Neeta Deshpande"
              exp="Experience - 20+ years"
              degree="MBBS, MD"
            />

            <DoctorCard
              docImage={doc2}
              name="Dr Archana Sarda"
              exp="Experience - 20+ years"
              degree="MBBS, MD"
            />

            <DoctorCard
              docImage={doc3}
              name="Dr Madhur Maheshwari"
              exp="Experience - 12+ years"
              degree="Endocrinology MBBS, MD, DM"
            />
          </div>
        </div>
        <div className="flex flex-col items-center py-8">
          <h1
            className={`${prospectusBold.className} text-3xl lg:text-6xl text-center my-4 text-[#163949]`}
          >
            Expert doctors
          </h1>
          <div className="lg:grid lg:grid-cols-2 b gap-x-72 gap-y-8">
            <ExpertCard
              expertImage={expert1}
              name="Dr Chaitanya Buva"
              exp="Experience - 26+ years"
              degree="Endocrinology MBBS,
            MD, DM"
            />
            <ExpertCard
              expertImage={expert2}
              name="Dr Tribhuvan Gulati"
              exp="Experience - 22+ years"
              degree="MBBS, MD - General Medicine Diabetologist, General Physician"
            />
            <ExpertCard
              expertImage={expert3}
              name="Dr Himanshu Sharma"
              exp="Experience - 13+ years"
              degree="MBBS, MD - General Medicine, DM - Endocrinology"
            />
            <ExpertCard
              expertImage={expert4}
              name="Dr Abhinav Garg"
              exp="Experience - 9+ years"
              degree="MBBS, MD - Medicine Consultant Physician, General Physician, Internal Medicine"
            />
          </div>
        </div>
        <div>
          <h1
            className={`${prospectusBold.className} text-3xl lg:text-6xl text-center my-4 text-[#163949]`}
          >
            Our coaches
          </h1>
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {coachData.map((coach, i) => {
              return (
                <CoachCard
                  key={i}
                  coachImg={coach.img}
                  name={coach.name}
                  experience={coach.exp}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDoctors;
const coachData = [
  {
    img: require("../../../public/coach1.svg"),
    name: "Pooja Shinde",
    exp: "Team lead - health coach Msc. Nutrition, food science & technology — diabetes educator",
  },
  {
    img: require("../../../public/coach2.svg"),
    name: "Ashwini Gupta",
    exp: "Team Lead - Health Coach - Post graduation clinical nutrition & food dietetics",
  },
  {
    img: require("../../../public/coach3.svg"),
    name: "Chandana Soni",
    exp: "Assistant Team Lead - Health Coach - M.SC.- Nutrition and dietetics ",
  },
  {
    img: require("../../../public/coach4.svg"),
    name: "Madhavi Mahajan",
    exp: "Assistant Team Lead - Health Coach - PG in Sports Science, Fitness & Nutrition",
  },
  {
    img: require("../../../public/coach5.png"),
    name: "Neha Singh",
    exp: "Assistant Team Lead - Health Coach - M.Sc - dietetics & food service management",
  },
];
