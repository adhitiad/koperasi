import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsItem: [],
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductsStart: (state: any) => {
      state.loading = true;
      state.error = null;
    },
    setProductsSuccess: (state: any, action) => {
      state.loading = false;
      state.productItems = action.payload;
    },
    setProductsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setProductsStart, setProductsSuccess, setProductsError } =
  productSlice.actions;

export default productSlice.reducer;
