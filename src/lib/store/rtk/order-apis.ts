import EndPoints from "./end-points";
import rtkApi from "./rtkApi";

const apis = rtkApi.injectEndpoints({
  endpoints(build) {
    return {
      getOrders: build.query<MedicineOrder[], void>({
        query: () => ({
          method: "GET",
          url: EndPoints.ORDERS,
        }),
        providesTags: ["Orders"],
      }),
      createOrder: build.mutation<CreateOrderResponse, CreateOrderParams>({
        query: (data) => {
          return {
            method: "POST",
            url: EndPoints.ORDERS,
            body: data,
          };
        },
      }),
      updateOrder: build.mutation<
        CreateOrderResponse,
        { data: CreateOrderParams; order_id: number }
      >({
        query: ({ data, order_id }) => {
          return {
            method: "PATCH",
            url: EndPoints.UPDATE_ORDERS_QUANTITY(order_id),
            body: data,
          };
        },
      }),
      initiatePayment: build.mutation<InitiatePaymentResponse, string>({
        query: (order_id) => ({
          method: "POST",
          url: EndPoints.PAYMENT,
          body: { order_id: order_id },
        }),
      }),
      confirmPayment: build.mutation<object, ConfirmParams>({
        query: (data) => ({
          method: "POST",
          url: EndPoints.CONFIRMATION,
          body: data,
        }),
        invalidatesTags: ["Orders"],
      }),

      generateCart: build.query<ProductItem[], number>({
        query: (id) => ({
          method: "GET",
          url: EndPoints.CART(id),
        }),
        transformResponse: (response: ProductItem[]) => {
          return response.map((item) => {
            const { price, ...rest } = item;
            return {
              ...rest,
              price: item.mrp,
            };
          });
        },
        providesTags: ["Cart"],
      }),
      clearCart: build.mutation<object, void>({
        queryFn: () => {
          return { data: {} };
        },
        invalidatesTags: ["Cart", "Address", "Coupons"],
      }),

      // New endpoints
      getEligibleCoupons: build.query<Coupon[], { current_date: string }>({
        query: ({ current_date }) => ({
          method: "GET",
          url: EndPoints.GET_ELIGIBLE_COUPONS,
          params: { current_date },
        }),
        providesTags: ["Coupons"],
      }),
      getDiscount: build.mutation<
        DiscountResponse,
        { amount: number; coupon: number }
      >({
        query: ({ amount, coupon }) => ({
          url: EndPoints.GET_DISCOUNT,
          method: "GET",
          params: { amount, coupon },
        }),
      }),
    };
  },
});

export default apis;
