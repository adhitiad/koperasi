import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state: any, action: any) => {
      const newItem = action.payload;
      const selectCartIndex = state.cartItems.findIndex(
        (product: any) => product.id === newItem.id
      );
      const countItem = newItem.quantity ? newItem.quantity : 1;
      const countPrice = newItem.totalPrice
        ? newItem.totalPrice
        : newItem.price;
      const countPoint = newItem.point ? newItem.point : newItem.id;

      if (selectCartIndex !== -1) {
        state.cartItems[selectCartIndex].quantity += countItem;
        state.cartItems[selectCartIndex].totalPrice =
          state.cartItems[selectCartIndex].quantity * newItem.price;
        state.cartItems[selectCartIndex].point =
          state.cartItems[selectCartIndex].quantity * newItem.id;
      } else {
        state.cartItems.push({
          ...newItem,
          quantity: countItem,
          totalPrice: countPrice,
          point: countPoint,
        });
      }
    },
    removeFromCart: (state: any, action) => {
      state.cartItems = state.cartItems.filter(
        (product: any) => product.id !== action.payload
      );
    },
    clearCart: (state: any) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// selector
export const selectCartItems: any = (state: any) => state.cart.cartItems;
export const selectCartItemsById: any = (state: any, id: any) =>
  state.cart.cartItems?.find((item: any) => item.id === id);
export const selectCartCount: any = (state: any) =>
  state.cart.cartItems?.length;
export const selectTotalPrice: any = (state: any) => {
  let total = 0;
  state.cart.cartItems?.forEach((item: any) => {
    total += item.totalPrice;
  });
  return total;
};
export const selectTotalPoint: any = (state: any) => {
  let total = 0;
  state.cart.cartItems?.forEach((item: any) => {
    total += item.point;
  });
  return total;
};

export default cartSlice.reducer;
