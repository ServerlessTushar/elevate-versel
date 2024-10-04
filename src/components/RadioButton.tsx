import React from "react";

interface RadioButtonProps {
  radius: number;
  borderColor: string;
  fillColor: string;
  isSelected: boolean;
}

export default function RadioButton({
  radius,
  borderColor,
  fillColor,
  isSelected,
}: RadioButtonProps) {
  const size = radius * 2;
  const style = {
    width: size,
    height: size,
    borderRadius: "50%",
    border: `1.5px solid ${borderColor}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginRight: 10,
  };

  const fillStyle = {
    width: radius,
    height: radius,
    borderRadius: "50%",
    backgroundColor: isSelected ? fillColor : "transparent",
  };

  return (
    <div style={style}>
      <div style={fillStyle}></div>
    </div>
  );
}
