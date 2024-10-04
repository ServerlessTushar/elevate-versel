"use client";
import {
  CouponsForYou,
  Header,
  PaymentSummary,
  WantADiscount,
  ItemsInCart,
  YouSaved,
  MedicineFamilyCard,
  MedicineButton,
  GetElevateNow,
  TokenExpired,
} from "@/sections/Medicines";
import { useEffect, useRef } from "react";
import { notoLight } from "@/app/fonts";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import { useAppSelector } from "@/lib/store/store";
import { useCart, useCoupons } from "@/utils/hooks/shop";

interface Props {
  params: {
    id: string;
  };
}
export default function Shop({ params: { id } }: Props) {
  const {
    cart,
    handleDownloadPrescription,
    updateCart,
    isSuccess,
    callCreateCart,
    data: cartApiData,
    accessLoading,
  } = useCart(id);
  const {
    coupons,
    isLoading: isCouponLoading,
    isSuccess: isCouponSuccess,
    refreshCoupons,
    applyCoupon,
  } = useCoupons();
  const router = useRouter();
  const { isTokenExpired } = useAppSelector((state) => state.UserDataSlice);
  const hasCalledCreateCart = useRef(false);

  const placeOrder = () => {
    router.push(`/shop/${id}/checkout`);
  };

  const isEligible = cart.amount_for_free_shipping
    ? cart.amount_for_free_shipping > 0
    : false;
  const title = `Place Order ( To Pay Rs. ${cart.summary[2]} )`;

  const savings = (
    (+cart?.summary[1] || 0) + (+cart?.shipping_charge || 0)
  ).toFixed(2);

  useEffect(() => {
    if (
      isSuccess &&
      !cartApiData[0]?.order_id &&
      !hasCalledCreateCart.current
    ) {
      callCreateCart();
      hasCalledCreateCart.current = true;
    }
  }, [isSuccess]);

  useEffect(() => {
    if (cart.amount_for_free_shipping > 0) {
      refreshCoupons();
    }
  }, [cart.amount_for_free_shipping]);

  useEffect(() => {
    if (isCouponSuccess && isSuccess) {
      applyCoupon(
        coupons?.first_coupon?.coupon_id!,
        coupons?.first_coupon?.coupon_discount!,
        coupons?.first_coupon?.coupon_code!
      );
    }
  }, [isCouponSuccess, isSuccess]);

  return (
    <main className={`${notoLight.className} font-[350] bg-white md:h-[100vh]`}>
      <Header />
      <div className="flex">
        {(!accessLoading && isSuccess) || isTokenExpired ? (
          isTokenExpired ? (
            <TokenExpired />
          ) : (
            <div className="flex flex-col md:flex-row md:justify-between mx-auto w-[95%]">
              <div className="flex flex-col gap-3 md:w-[30%]">
                <ItemsInCart
                  cartTitle={cart.cart_title}
                  downloadPrescription={handleDownloadPrescription}
                />
                {!isCouponLoading && isEligible && (
                  <WantADiscount amount={cart.amount_for_free_shipping} />
                )}
                {!isCouponLoading && cart.applied_coupon_code && (
                  <YouSaved savings={savings} />
                )}
                <MedicineFamilyCard
                  cart={cart}
                  coupons={coupons}
                  updateCart={updateCart}
                />
              </div>
              <div className="flex flex-col gap-3 md:w-[30%]">
                <PaymentSummary summary={cart.payment_summary()} />
                {!isCouponLoading && isEligible && (
                  <WantADiscount amount={cart.amount_for_free_shipping} />
                )}
                {!isCouponLoading && cart.applied_coupon_code && (
                  <YouSaved savings={savings} />
                )}
                <GetElevateNow />
                <CouponsForYou />
                <MedicineButton
                  title={title}
                  onClick={placeOrder}
                  disabled={cart.is_empty}
                  className="hidden md:block"
                />
              </div>
              <MedicineButton
                title={title}
                onClick={placeOrder}
                disabled={cart.is_empty}
                className="block md:hidden"
              />
            </div>
          )
        ) : (
          <div className="w-full h-[88vh] flex justify-center items-center">
            <CircularProgress
              size={50}
              thickness={3}
              className="my-auto"
              style={{ color: "#EA6F54" }}
            />
          </div>
        )}
      </div>
    </main>
  );
}
