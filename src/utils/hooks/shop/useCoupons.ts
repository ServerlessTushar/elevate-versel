import rtkApi from "@/lib/store/rtk";
import { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/store";

import { fomatDDMMYY } from "@/lib/utils";
import { UserCoupons } from "@/serializers/shop";
import useCart from "./useCart";

const useCoupons = () => {
  const { accessToken } = useAppSelector((state) => state.UserDataSlice);
  const { cart, applyDiscountOnItem } = useCart();
  const couponsApi = rtkApi.useGetEligibleCouponsQuery(
    {
      current_date: fomatDDMMYY(new Date(), "YYYY-MM-DD"),
    },
    {
      skip: !!!accessToken,
    }
  );
  const [getDiscount] = rtkApi.useGetDiscountMutation();
  const [discountResponse, setDiscountResponse] = useState<DiscountResponse>();
  const dispatch = useAppDispatch();

  const coupons = useMemo(() => {
    return new UserCoupons(couponsApi.data || []);
  }, [couponsApi.data]);

  const applyCoupon = async (
    coupon_id: number,
    discount: number,
    coupon_code: string
  ): Promise<
    { data: DiscountResponse | null; success: boolean } | undefined
  > => {
    try {
      const response = await getDiscount({
        amount: parseFloat(cart.summary[0]),
        coupon: coupon_id,
      });
      if ("data" in response) {
        if (response.data?.success) {
          applyDiscountOnItem(discount, coupon_code, coupon_id);
          const update = (old: Coupon[]) => {
            const index = old.findIndex((item) => item.id === coupon_id);
            if (index !== -1) {
              old[index].is_applied = true;
            }
          };
          if (couponsApi.originalArgs) {
            const action = rtkApi.util.updateQueryData;
            dispatch(
              action("getEligibleCoupons", couponsApi.originalArgs, update)
            );
          }
          setDiscountResponse(response.data);
          return { success: true, data: { ...response.data } };
        } else {
          return {
            success: false,
            data: null,
          };
        }
      }
    } catch (error) {
      console.error("handleGetDiscount Error:", error);
    }
  };

  const removeCoupon = (coupon_id: number) => {
    const update = (old: Coupon[]) => {
      const index = old.findIndex((item) => item.id === coupon_id);
      if (index !== -1) {
        old[index].is_applied = false;
      }
    };
    if (couponsApi.originalArgs) {
      const action = rtkApi.util.updateQueryData;
      dispatch(action("getEligibleCoupons", couponsApi.originalArgs, update));
    }
    applyDiscountOnItem(0, "", undefined);
  };

  const refreshCoupons = () => {
    const update = (old: Coupon[]) => {
      old.forEach((item) => {
        item.is_applied = false;
      });
    };
    if (couponsApi.originalArgs) {
      const action = rtkApi.util.updateQueryData;
      dispatch(action("getEligibleCoupons", couponsApi.originalArgs, update));
    }
    applyDiscountOnItem(0, "", undefined);
  };

  return {
    ...couponsApi,
    coupons,
    applyCoupon,
    discountResponse,
    removeCoupon,
    refreshCoupons,
  };
};

export default useCoupons;
