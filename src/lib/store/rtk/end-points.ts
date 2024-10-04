const EndPoints = {
  ORDERS: "user_order/",
  UPDATE_ORDERS_QUANTITY: (order_id) => `user_order/${order_id}/`,
  PAYMENT: "payment/",
  CART: (id: number) =>
    `prescriptions/${id}/products/get_line_item_variation_by_cart/`,
  ADDRESS: "user_address/",
  CHECK_PINCODE: (id: number) =>
    `prescriptions/${id}/products/products_service_by_pincode/`,
  CONFIRMATION: "payment-confirmation/",
  BUSINESS_CONFIG: "business_config/",

  GET_ELIGIBLE_COUPONS: "coupons/get_eligible_coupons/",
  GET_DISCOUNT: "coupons/get_discount/",
} satisfies {
  [key: string]: string | ((...arg: any) => string);
};

export default new Proxy(EndPoints, {
  get(target, prop: keyof typeof EndPoints) {
    if (typeof target[prop] === "function" && target[prop]) {
      return (...args: any[]) => {
        // @ts-ignore
        const value = target[prop](...args);
        if (typeof value === "string") {
          return "api/v1/users/" + value;
        }
      };
    } else {
      return "api/v1/users/" + target[prop];
    }
  },
});
