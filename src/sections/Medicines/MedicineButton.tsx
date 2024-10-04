import React from "react";

interface Props {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  showMsg?: string;
  className?: string;
}
export default function MedicineButton({
  title,
  onClick,
  disabled,
  showMsg,
  className,
}: Props) {
  return (
    <div
      className={`bg-white sticky bottom-0 w-full py-3 flex justify-center ${className} flex-col`}
    >
      {showMsg && (
        <p
          style={{
            color: "#CB3412",
            textAlign: "center",
            fontSize: 16,
            fontWeight: "500",
            marginBottom: 10,
          }}
        >
          {showMsg}
        </p>
      )}
      <div
        style={{
          display: "flex",
          // position: "fixed",
          // bottom: 0,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: disabled ? "#757575" : "#EA6F54",
          borderRadius: 8,
          // marginBottom: 20,
        }}
        onClick={disabled ? () => {} : onClick}
      >
        <p style={{ fontWeight: 400, fontSize: 18, color: "#FFFFFF" }}>
          {title}
        </p>
      </div>
    </div>
  );
}
