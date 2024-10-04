import { useMemo } from "react";
import Modal from "@/components/Modal";
import ContactUs from "./ContactUs";
import GetElevateNow from "./GetElevateNow";
import successConfetti from "../../../public/lottieJson/successConfetti.json";
import exclamation from "../../../public/lottieJson/exclamation.json";
import orderSuccessful from "../../../public/lottieJson/orderSuccessful.json";
import sandClock from "../../../public/lottieJson/sandClock.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface Props {
  type: ProcessType;
  id: string;
}

export default function PaymentProcessingModal({ type, id }: Props) {
  const visible = !!type;

  const renderIcon = () => {
    switch (type) {
      case "success":
        return (
          <Lottie
            animationData={orderSuccessful}
            style={{ width: "100%", aspectRatio: 1 }}
            autoPlay
            loop={false}
          />
        );
      case "failure":
        return (
          <Lottie
            animationData={exclamation}
            style={{ width: 150, aspectRatio: 1 }}
            autoPlay
            loop={false}
          />
        );
      case "processing":
        return (
          <Lottie
            animationData={sandClock}
            style={{ width: "100%", aspectRatio: 1 }}
            autoPlay
          />
        );
    }
  };

  const renderConfetti = () => {
    return (
      <Lottie
        animationData={successConfetti}
        style={{
          position: "absolute",
          left: -5,
        }}
        autoPlay={true}
        loop={false}
      />
    );
  };

  const [title, subtitle] = useMemo(() => {
    switch (type) {
      case "success":
        return [
          "Thank You",
          `Your Order will be delivered with\norder number ${id}`,
        ];
      case "failure":
        return [
          "Oh no!",
          "We couldn't process your order for some reason.Please refresh your page or try again later. ",
        ];
      case "processing":
        return [
          "Payment in Process",
          "Please don't refresh or go back as your payment in in progress",
        ];
      default:
        return ["", ""];
    }
  }, [type, id]);

  return (
    <div className="flex  justify-center relative">
      <Modal isOpen={visible} onClose={() => {}}>
        <div
          className="w-[100%] mx-auto h-[100%]"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 150,
              aspectRatio: 1,
              backgroundColor: "#EA6F54",
              borderRadius: 100,
              marginBottom: 30,
            }}
          >
            {type === "success" && renderConfetti()}
            {renderIcon()}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <p
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#090F47",
              }}
            >
              {title}
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#757575",
                textAlign: "center",
              }}
            >
              {subtitle}
            </p>
          </div>
          <div style={{ marginTop: 50, display: "flex", width: "100%" }}>
            <GetElevateNow />
          </div>
          <ContactUs />
        </div>
      </Modal>
    </div>
  );
}
