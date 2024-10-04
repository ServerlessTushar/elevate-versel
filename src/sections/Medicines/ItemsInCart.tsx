import Image from "next/image";
import React from "react";
import download from "../../../public/download.svg";

interface Props {
  cartTitle: string;
  downloadPrescription: () => void;
}

export default function ItemsInCart({
  cartTitle,
  downloadPrescription,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
      }}
    >
      <p style={{ color: "#757575", fontWeight: 400, fontSize: 16 }}>
        {cartTitle}
      </p>
      <div
        style={{ display: "flex", flexDirection: "row", gap: 8 }}
        onClick={downloadPrescription}
      >
        <Image src={download} alt="download" height={16} />

        <p style={{ color: "#EA6F54", fontSize: 16, fontWeight: 500 }}>
          Prescription
        </p>
      </div>
    </div>
  );
}
