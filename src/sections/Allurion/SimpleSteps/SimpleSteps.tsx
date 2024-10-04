import { prospectus } from "@/app/fonts";
import React, { lazy } from "react";
const YouTubeEmbed = lazy(() =>
  import("@next/third-parties/google").then((module) => ({
    default: module.YouTubeEmbed,
  }))
);
const SimpleSteps = ({ id }: { id: string }) => {
  return (
    <div className="bg-white md:py-8">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <h2
          className={`text-center font-md mt-6 md:my-6 text-textDarkBlue ${prospectus.className} md:text-3xl`}
        >
          Simple steps towards{" "}
        </h2>
        <p className="text-center text-2xl md:text-6xl mt-2 md:mt-8 mb-8 font-bold text-primaryBlue">
          Sustainable weight loss
        </p>
        <div className="hidden md:flex md:justify-center mb-2">
          <YouTubeEmbed
            videoid={id}
            height={480}
            width={720}
            params="controls=0"
          />
        </div>
        <div className="flex justify-center md:hidden mb-2">
          <YouTubeEmbed
            videoid={id}
            height={200}
            width={320}
            params="controls=0"
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleSteps;
