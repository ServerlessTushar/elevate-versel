import Image from "next/image";
import React, { useState } from "react";
import { UserCouponItem } from "@/serializers/shop";
import CouponApplied from "./CouponApplied";
import coupon from "../../../public/coupon.svg";
import down from "../../../public/top.svg";
import { CircularProgress } from "@mui/material";

type CouponCardProps = {
  removeCoupon: (coupon_id: number) => void;
  couponItem?: UserCouponItem;
  applyCoupon: (
    coupon_id: number,
    discount: number,
    coupon_code: string
  ) => Promise<{ data: DiscountResponse | null; success: boolean } | undefined>;
  freeShippingAmount: number;
};

const Coupon = ({
  removeCoupon,
  couponItem,
  freeShippingAmount,
  applyCoupon,
}: CouponCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showCouponAppliedMsg, setShowCouponAppliedMsg] = useState(false);
  const [discount, setDiscount] = useState("0");
  const [couponApplying, setCouponApplying] = useState(false);

  const onPress = () => {
    setCouponApplying(true);
    const discountResponse = applyCoupon(
      couponItem?.coupon_id!,
      couponItem?.coupon_discount!,
      couponItem?.coupon_code!
    );

    discountResponse.then((res) => {
      if (res?.success) {
        setDiscount(res?.data?.discount?.toFixed(2) || "0");
        setShowCouponAppliedMsg(true);
        setCouponApplying(false);
      }
    });
  };

  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const opacity =
    freeShippingAmount > 0 && !couponItem?.is_coupon_applied ? 0.5 : 1;

  return (
    <>
      <div style={{ opacity }}>
        <div
          className={`px-1 pt-2 rounded-t-lg ${
            couponItem?.is_coupon_applied
              ? "bg-[#F9F8F8]"
              : "border-[#F1E1C9] border-[1px] border-b-0"
          }`}
        >
          <div className="flex relative pb-2">
            <div className="w-[10%]">
              <Image src={coupon} alt="coupon" height={30} />
            </div>

            <div className="w-[70%]">
              <p className="text-[#757575]">{couponItem?.description}</p>
              <p className="text-[#EA6F54]">
                <b>{couponItem?.coupon_code}</b>
              </p>
            </div>
            <div className="relative w-[21%]">
              {couponItem?.is_coupon_applied && (
                <button
                  onClick={() => removeCoupon(couponItem?.coupon_id)}
                  className="bg-[#D9D9D9] text-[10px] absolute right-1 px-2 py-[2px] rounded-md"
                >
                  Remove
                </button>
              )}
              <button
                onClick={toggleShowDetails}
                className="flex gap-[2px] text-[10px] text-[#757575] absolute bottom-0"
              >
                {showDetails ? "Hide Details" : "View Details"}
                <Image
                  src={down}
                  alt="down"
                  className={`my-auto ${
                    showDetails ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>
          </div>
          <div
            className={`px-5 py-3 border-t-[1px] border-[#F1E1C9] border-dashed ${
              showDetails ? "block" : "hidden"
            }`}
          >
            <ul className="text-xs list-disc">
              <li>Applicable on all medicines</li>
              <li className="mt-1">Applicable maximum once a month</li>
              <li className="mt-1">Other T&C may apply</li>
            </ul>
          </div>
        </div>

        <button
          onClick={onPress}
          className={`${
            couponItem?.is_coupon_applied
              ? "bg-[#D9D9D9] text-black py-[9px]"
              : "border-[#EA6F54] text-[#EA6F54] border-[1px] py-2"
          } w-full rounded-b-lg flex justify-center items-center`}
          disabled={opacity === 0.5 || couponItem?.is_coupon_applied}
        >
          {couponApplying ? (
            <CircularProgress
              color="inherit"
              size={24}
              thickness={5}
              className="my-auto"
            />
          ) : couponItem?.is_coupon_applied ? (
            "APPLIED"
          ) : (
            "APPLY"
          )}
        </button>
      </div>
      {showCouponAppliedMsg && (
        <CouponApplied
          setCouponAppliedMsg={setShowCouponAppliedMsg}
          discount={discount}
        />
      )}
    </>
  );
};

export default Coupon;
