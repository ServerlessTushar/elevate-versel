import ThankYou from "@/sections/Thank-You/ThankYou";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense>
        <ThankYou />
      </Suspense>
    </div>
  );
};

export default page;
