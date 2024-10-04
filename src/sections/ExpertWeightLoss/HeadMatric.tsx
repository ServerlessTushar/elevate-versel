import {
  epilogue,
  prospectus,
  prospectusBlack,
  prospectusSemiBold,
} from "@/app/fonts";
import Divider from "@/components/Divider";
import React from "react";

const HeadMetric = () => {
  return (
    <div className="flex flex-row items-center border-[1px] border-[#3881c5] bg-white rounded-lg py-2 -translate-y-2">
      <div className="flex-col flex-1 text-center">
        <p
          className={`text-lg ${prospectusBlack.className} text-textDarkBlue leading-5`}
        >
          5000+
        </p>
        <p
          className={`${epilogue.className} text-[0.6rem] lg:text-sm   text-textDarkBlue`}
        >
          happy <br />
          customers
        </p>
      </div>
      <Divider />
      <div className="flex-col flex-1 text-center">
        <p
          className={`text-lg ${prospectusBlack.className} text-textDarkBlue leading-5`}
        >
          4”
        </p>
        <p
          className={`${epilogue.className} text-[0.6rem] lg:text-sm  text-textDarkBlue`}
        >
          average drop in <br />
          waist line
        </p>
      </div>
      <Divider />
      <div className="flex-col flex-1 text-center">
        <p
          className={`text-lg ${prospectusBlack.className} text-textDarkBlue leading-5`}
        >
          94%
        </p>
        <p
          className={`${epilogue.className} text-[0.6rem] lg:text-sm  text-textDarkBlue`}
        >
          achieved
          <br />
          lasting results
        </p>
      </div>
    </div>
  );
};

export default HeadMetric;
