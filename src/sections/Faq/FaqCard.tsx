"use client";
import { epilogueBold } from "@/app/fonts";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
type CardType = {
  title: string;
  desc: string;
};
const FaqCard = ({ title, desc }: CardType) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="max-w-72 ">
      <div
        className="flex justify-between gap-6"
        onClick={() => setModal(!modal)}
      >
        <h1 className={`${epilogueBold.className}  text-[#163949] w-72`}>
          {title}
        </h1>
        <div>{modal ? <ChevronUp /> : <ChevronDown />}</div>
      </div>
      {modal && <p className="mt-2">{desc}</p>}
    </div>
  );
};

export default FaqCard;
