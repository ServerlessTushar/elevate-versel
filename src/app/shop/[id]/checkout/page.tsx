"use client";

import React, { useEffect, useState } from "react";
import rtkApi from "@/lib/store/rtk";
import { notoLight } from "@/app/fonts";

import { useAddresses, useCart, useUserDetails } from "@/utils/hooks/shop";
import {
  OrderDeliveryDays,
  PaymentSummary,
  CheckoutHeader,
  MedicineButton,
  PaymentProcessingModal,
  CheckoutAddress,
  YouSaved,
} from "@/sections/Medicines";

type ProcessType = "success" | "failure" | "processing" | "";

interface Props {
  params: {
    id: string;
  };
}

export default function Shop({ params }: Props) {
  const { cart, updateCartByAPI } = useCart(params.id);
  const addresses = useAddresses();

  const user = useUserDetails();
  const [initiatePayment] = rtkApi.useInitiatePaymentMutation();
  const [confirmPayment] = rtkApi.useConfirmPaymentMutation();

  const [process, setProcess] = useState<ProcessType>("");
  const [orderId, setOrderId] = React.useState<string | undefined>("");
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  const savings = (
    (+cart?.summary[1] || 0) + (+cart?.shipping_charge || 0)
  ).toFixed(2);
  const canContinue = addresses.can_continue;

  const redirectToCheckout = () => {
    setTimeout(() => {
      setProcess("");
    }, 2000);
  };

  // Dynamically load the Razorpay script
  useEffect(() => {
    const loadRazorpayScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => setIsRazorpayLoaded(true);
      script.onerror = () => console.error("Razorpay SDK failed to load");
      document.body.appendChild(script);
    };

    if (!isRazorpayLoaded) {
      loadRazorpayScript();
    }
  }, [isRazorpayLoaded]);

  const onOrder = async () => {
    if (!isRazorpayLoaded) {
      alert("Razorpay SDK not loaded. Please try again later.");
      return;
    }
    try {
      setProcess("processing");
      const order = await updateCartByAPI();
      setOrderId(order?.data?.order_id);
      const payment = await initiatePayment(order?.data?.order_id!).unwrap();
      // spinner.current?.show(); show loading indicator
      const options = {
        ...payment.razorpay_options,
        theme: { color: "#EA6F54" },
        prefill: user.prefill,
        handler: function (response: any) {
          const confirmation = {
            ...response,
            elevate_now_order_id: payment.elevate_now_order_id,
          };
          return confirmPayment(confirmation)
            .unwrap()
            .then(() => {
              setProcess("success");
              //finish(); where do redirect after payment
            })
            .catch((e) => {
              console.log(e, "error");
              setProcess("failure");
              redirectToCheckout();
            });
        },
        modal: {
          ondismiss: () => {
            setProcess("failure");
            redirectToCheckout();
          },
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log(error, "error in rayzpay");
      setProcess("failure");
      redirectToCheckout();
    }
  };

  return (
    <>
      <main className={`${notoLight.className} font-[350] bg-white`}>
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-col gap-3 mx-auto w-[95%] flex-grow">
            <CheckoutHeader />
            {cart.applied_coupon_code && <YouSaved savings={savings} />}
            <PaymentSummary summary={cart.payment_summary()} />
            <CheckoutAddress />
            <PaymentProcessingModal type={process} id={orderId!} />
          </div>
          <div className="flex flex-col gap-3 mx-auto w-[95%] ">
            <OrderDeliveryDays />
            <MedicineButton
              title={`Place Order ( To Pay Rs. ${cart.summary[2]} )`}
              onClick={onOrder}
              disabled={!canContinue}
              showMsg={
                canContinue ? "" : "Please add address to place your order"
              }
            />
          </div>
        </div>
      </main>
    </>
  );
}
