import React from "react";
import Image from "next/image";
import phone from "../../../public/phone.svg";

export default function ContactUs() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFEEEA80",
        borderRadius: 15,
        width: "100%",
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Image src={phone} alt="truck" height={16} />
        <p style={{ fontSize: 16, color: "#EA6F54", marginLeft: 5 }}>
          Contact Us
        </p>
      </div>

      <div
        style={{
          color: "#757575",
          fontSize: 12,
          textAlign: "center",
          fontWeight: 400,
        }}
      >
        <p>for any queries regarding your order at </p>
        <p>+919830098300</p>
      </div>
    </div>
  );
}
