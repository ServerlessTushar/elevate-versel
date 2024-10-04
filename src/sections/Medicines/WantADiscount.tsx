import React from "react";

const WantADiscount = ({ amount }: { amount: number }) => {
  return (
    <p className="bg-[#FFDCD5] text-[#EA6F54] px-4 py-2 rounded-xl ">
      Add items worth Rs. {amount} more to get 15% off and free delivery
    </p>
  );
};

export default WantADiscount;
