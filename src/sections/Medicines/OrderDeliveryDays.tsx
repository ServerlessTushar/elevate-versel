import Image from "next/image";
import React from "react";
import truck from "../../../public/truck.svg";

export default function OrderDeliveryDays() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: "#FFEEEA80",
        borderRadius: 8,
      }}
    >
      <Image src={truck} alt="truck" height={30} />
      <div style={{ color: "#EA6F54", fontSize: 14 }}>
        <i>
          <p>Your order will be delivered in</p>
          <p style={{ fontWeight: "bold" }}>3-5 bussiness days</p>
        </i>
      </div>
    </div>
  );
}
