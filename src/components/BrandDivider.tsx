import React from "react";

interface BrandDividerProps {
  className?: string;
}

const BrandDivider: React.FC<BrandDividerProps> = ({ className }) => {
  return <div className={`w-[1px] bg-red-600 ${className}`}></div>;
};

export default BrandDivider;
