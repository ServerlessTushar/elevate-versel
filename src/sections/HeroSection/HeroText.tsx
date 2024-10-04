import {
    epilogue,
    prospectus,
    prospectusBold,
    prospectusSemiBold,
} from "@/app/fonts";
import Bullet from "@/components/Bullet";
import React from "react";

const HeroText = () => {
  return (
      <div className="w-2/3 md:h-[500px] flex flex-col justify-center ">
          <h5 className="text-sm md:text-2xl my-2 text-textDarkBlue w-36 lg:w-full">
              Tired of failed weight loss attempts?
          </h5>
          <h4
              className={`${prospectusSemiBold.className} text-sm md:text-2xl my-2 text-primaryBlue`}
          >
              Try the one that
          </h4>
          <h1
              className={`${prospectusSemiBold.className} text-4xl md:text-8xl  text-primaryBlue `}
          >
              Actually <br />
              works!
          </h1>
          <ul>
              <li
                  className={`${epilogue.className} text-textDarkBlue flex items-center text-xs  md:text-lg my-2`}
              >
                  <Bullet />
                  Results from first month
              </li>
              <li
                  className={`${epilogue.className} text-textDarkBlue flex items-center text-xs md:text-lg my-2`}
              >
                  <Bullet />
                  ~15% weight loss in 6 month
              </li>
              <li
                  className={`${epilogue.className} text-textDarkBlue flex items-center text-xs  md:text-lg my-2 mb-4`}
              >
                  <Bullet />
                  No weight bounce back{" "}
              </li>
          </ul>
      </div>
  );
};

export default HeroText;
