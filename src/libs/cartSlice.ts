import { create } from "zustand";

export const useCartSlice = create((set) => ({
  cart: [],
  setCart: (cart: any) => set({ cart }),
  clearCart: () => set({ cart: [] }),
}));

export const selectCart = (state: any) => state.cartSlice.cart;
