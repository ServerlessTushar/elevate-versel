import Image from "next/image";
import React, { useEffect, useState } from "react";
import getElevateNow from "../../../public/getElevateNow.svg";
import { notoLight } from "@/app/fonts";

export default function GetElevateNow() {
  const [isIOS, setIsIOS] = useState(false);
  const ios_url = "https://apps.apple.com/app/id6468775194";
  const android_url =
    "https://play.google.com/store/apps/details?id=com.whealth.elevatenow&pli=1";

  useEffect(() => {
    const userAgent =
      typeof window !== "undefined"
        ? navigator.userAgent || navigator.vendor || window.opera
        : "";

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setIsIOS(true);
    }
  }, []);

  const goToStore = () => {
    if (isIOS) {
      window.location.href = ios_url;
    } else {
      window.location.href = android_url;
    }
  };

  return (
    <div
      className={notoLight.className}
      style={{
        display: "flex",
        flexDirection: "row",
        height: "85px",
        marginBottom: 20,
        borderRadius: 8,
        backgroundImage: "linear-gradient(to right, #16394A, #3488B0)",
        width: "100%",
      }}
    >
      <Image src={getElevateNow} alt="GetElevateNow" height={80} />

      <div
        style={{
          color: "#757575",
          fontSize: 12,
          textAlign: "center",
          fontWeight: 400,
          paddingTop: 13,
          paddingBottom: 15,
          position: "relative",
          right: 20,
        }}
      >
        <p
          style={{
            color: "#ffffff",
            fontSize: 15,
            fontWeight: 400,
            marginBottom: 7,
          }}
        >
          For a seamless experience
        </p>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            backgroundColor: "#EA6F54",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            height: 30,
          }}
        >
          <button
            style={{ color: "#ffffff", fontSize: 12, fontWeight: 500 }}
            onClick={goToStore}
          >
            Get ElevateNow App
          </button>
        </div>
      </div>
    </div>
  );
}
