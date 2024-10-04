import { useMemo } from "react";
import rtkApi from "@/lib/store/rtk";
import { useAppDispatch, useAppSelector } from "@/lib/store/store";

import { saveAs } from "file-saver";
import { getUpper } from "@/lib/utils";
import usePrescriptions from "./usePrescriptions";
import useAddresses from "./useAddresses";
import { UserMedicineCart, UserAddress } from "@/serializers/shop";
import { CartDataActions } from "@/lib/store/Slices/CartDataSlice";

const useCart = (userId?: string) => {
  const authToken = rtkApi.useGetAuthTokenQuery(userId!, {
    skip: userId === undefined,
  });
  const { accessToken } = useAppSelector((state) => state.UserDataSlice);

  const userData = rtkApi.useGetUserDataQuery(undefined, {
    skip: !!!accessToken,
  });
  const prescriptions = usePrescriptions();
  const cartApi = rtkApi.useGenerateCartQuery(
    prescriptions?.active_prescription?.id,
    {
      skip: !!!prescriptions?.active_prescription?.id,
    }
  );
  const downloadPrescription = rtkApi.useDownloadPrescriptionQuery(
    prescriptions?.active_prescription?.id,
    {
      skip: !!!prescriptions?.active_prescription?.id,
    }
  );

  const { cartData, orderId } = useAppSelector((state) => state.CartDataSlice);
  const dispatch = useAppDispatch();
  const checkout_address = useAddresses().checkout_address;
  const [updateOrder] = rtkApi.useUpdateOrderMutation();
  const [createOrder] = rtkApi.useCreateOrderMutation();

  const handleDownloadPrescription = () => {
    if (downloadPrescription.data) {
      const blob = new Blob([downloadPrescription.data], {
        type: "application/pdf",
      });
      const title = `${userData.data?.full_name}-${getUpper(
        prescriptions.active_prescription.diagnosis
      )} Prescription-${Date.now()}.pdf`;

      const url = window.URL.createObjectURL(blob);

      const userAgent =
        typeof window !== "undefined"
          ? navigator.userAgent || navigator.vendor || window.opera
          : "";

      if (
        /iPad|iPhone|iPod/.test(userAgent) &&
        !window.MSStream &&
        /Safari/.test(userAgent) &&
        !/CriOS|FxiOS/.test(userAgent)
      ) {
        const newWindow = window.open(url);
        if (newWindow) {
          newWindow.onload = () => {
            setTimeout(() => {
              newWindow.focus();
              newWindow.print();
            }, 1000);
          };
        }
      } else {
        const a = document.createElement("a");
        a.href = url;
        a.download = title;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }

      //saveAs(blob, title);
    }
  };

  const cart = useMemo(() => {
    return new UserMedicineCart(cartData || []);
  }, [cartData]);

  const updateCart = ({ id, quantity }: { id: number; quantity: number }) => {
    dispatch(CartDataActions.updateCartItemQuantity({ id, quantity }));
  };

  const callCreateCart = async () => {
    const address = new UserAddress(checkout_address).validate();
    const checkout = cart.checkout(address);
    const order = await createOrder({
      ...checkout,
      prescription: prescriptions.active_prescription.id,
      source: "whatsapp",
    });
    dispatch(CartDataActions.setOrderId(order?.data?.id));
    //setOrderID(order.data.id);
  };

  const updateCartByAPI = async () => {
    const address = new UserAddress(checkout_address).validate();
    const checkout = cart.checkout(address);
    const order = await updateOrder({
      data: {
        ...checkout,
        prescription: prescriptions.active_prescription.id,
        source: "whatsapp",
      },
      order_id:
        cartApi.isSuccess && cartApi?.data[0]?.order_id
          ? cartApi.data[0].order_id
          : orderId!,
    });
    dispatch(CartDataActions.setOrderId(order?.data?.id));
    return order;
  };

  const applyDiscountOnItem = (
    discount_percent: number,
    coupon_code: string,
    coupon_id: number | undefined
  ) => {
    dispatch(
      CartDataActions.applyDiscount({
        discount_percent,
        coupon_code,
        coupon_id,
      })
    );
  };

  return {
    ...cartApi,
    cart,
    handleDownloadPrescription,
    updateCart,
    updateCartByAPI,
    applyDiscountOnItem,
    callCreateCart,
    accessLoading: authToken.isLoading,
  };
};

export default useCart;
