import React from "react";
import Image from "next/image";

type AdvancedWeightLossTestimonialCardProps = {
  id: number;
  name: string;
  info: string;
  mobImg: any;
  desktopImg: any;
  comment: string;
};

const AdvancedWeightLossTestimonialCard = ({
  data,
}: {
  data: AdvancedWeightLossTestimonialCardProps;
}) => {
  return (
    <div className="max-w-none md:max-w-[30%] mx-auto">
      <div className="hidden md:block">
        <h2 className="text-base font-bold mt-2 mb-4">{data.name}</h2>
        <p className="mb-4">{data.info}</p>
      </div>
      <div className="hidden md:flex md:flex-row md:justify-between md:mb-8">
        <Image
          src={data.desktopImg}
          alt={`${data.name} desktop ago-later image`}
        />
      </div>
      <div className="flex flex-col mx-10 md:hidden py-6">
        <h2 className="text-base font-bold mb-2">{data.name}</h2>
        <p className="mb-4">{data.info}</p>
        <Image src={data.mobImg} alt={`${data.name} mobile ago-later image`} />
        <p className="text-base mt-6">{data.comment}</p>
      </div>
      <p className="text-base mb-16 hidden md:block">{data.comment}</p>
    </div>
  );
};

export default AdvancedWeightLossTestimonialCard;
