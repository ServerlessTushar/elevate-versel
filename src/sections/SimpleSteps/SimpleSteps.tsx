import React from "react";
import { prospectus, prospectusSemiBold } from "@/app/fonts";
import { YouTubeEmbed } from "@next/third-parties/google";

const SimpleSteps = () => {
  const Hero = () => (
    <div>
      <div className="max-w-7xl mx-auto px-4 pt-2 pb-8">
        <h2
          className={`text-center font-md my-2 text-[#163949] ${prospectusSemiBold.className} text-lg md:text-3xl translate-y-3`}
        >
          Simple steps towards{" "}
        </h2>
        <p
          className={`${prospectusSemiBold.className} text-center text-3xl md:text-7xl md:my-8 font-bold text-[#3881C5] mb-10`}
        >
          Sustainable weight loss
        </p>
      </div>
    </div>
  );

  const Video = () => (
    <div className="flex mx-auto md:h-[80vh] justify-center">
      {/* <YouTubeEmbed
        videoid="bIzmq2zgiII"
        width={700}
        style="height:100%"
        params="controls=1"
      /> */}
      <video
        width="auto"
        height="240"
        controls
        preload="none"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://assets.joinelevatenow.com/public/videos/getFitter.mp4"
          type="video/mp4"
        />
        Your browser does not support video.
      </video>
    </div>
  );

  return (
    <div className="bg-white mt-10">
      <Hero />
      <Video />
    </div>
  );
};

export default SimpleSteps;
