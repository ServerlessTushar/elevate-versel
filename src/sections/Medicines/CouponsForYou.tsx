import { useCoupons, useCart } from "@/utils/hooks/shop";
import Coupon from "./Coupon";

const CouponsForYou = () => {
  const { coupons, applyCoupon, removeCoupon } = useCoupons();
  const { cart } = useCart();
  return (
    <div className="flex flex-col gap-2">
      <h1>
        <b>Coupons for You</b>
      </h1>
      <Coupon
        removeCoupon={removeCoupon}
        couponItem={coupons.first_coupon}
        applyCoupon={applyCoupon}
        freeShippingAmount={cart.amount_for_free_shipping}
      />
    </div>
  );
};

export default CouponsForYou;
