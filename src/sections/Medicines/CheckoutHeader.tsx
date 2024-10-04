import React from "react";
import Image from "next/image";
import back from "../../../public/back.svg";
import { useRouter } from "next/navigation";

export default function CheckoutHeader() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingTop: 7,
        paddingBottom: 7,
      }}
    >
      <div onClick={goBack}>
        <Image src={back} alt="truck" height={17} style={{ marginLeft: 5 }} />
      </div>
      <p
        style={{
          margin: "auto",
          fontSize: 20,
          color: "#333333",
          fontWeight: 600,
          alignSelf: "center",
        }}
      >
        Checkout
      </p>
    </div>
  );
}
