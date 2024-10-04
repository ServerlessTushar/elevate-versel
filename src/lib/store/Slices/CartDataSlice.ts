import { createSlice } from "@reduxjs/toolkit";
import rtkApi from "@/lib/store/rtk";

const initialState: CartSlice = {
  cartData: null,
  orderId: null,
};

export const cartSlice = createSlice({
  name: "CartDataSlice",
  initialState,
  reducers: {
    setOrderId(state, action) {
      state.orderId = action.payload;
    },
    updateCartItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      if (state.cartData) {
        const item = state.cartData.find((item) => item.id === id);
        if (item) {
          item.quantity_available = quantity;
        }
      }
    },
    applyDiscount(state, action) {
      const { discount_percent, coupon_code, coupon_id } = action.payload;

      if (state.cartData) {
        state.cartData.forEach((item) => {
          const val =
            parseFloat(item.mrp) -
            parseFloat(item.mrp) * (discount_percent / 100);
          item.price = val.toString();
          item.coupon_code = coupon_code;
          item.coupon_id = coupon_id;
        });
      }
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      rtkApi.endpoints.generateCart.matchFulfilled,
      (state, action) => {
        state.cartData = action.payload;
      }
    );
  },
});

export default cartSlice.reducer;
export const CartDataActions = cartSlice.actions;
