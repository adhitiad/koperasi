import { create } from "zustand";

export const useProductSlice = create((set) => ({
  products: [],
  setProducts: (products: any) => set({ products }),
  clearProducts: () => set({ products: [] }),
  search: "",
  setSearch: (search: string) => set({ search }),
  clearSearch: () => set({ search: "" }),
  query: "",
  setQuery: (query: string) => set((state: any) => ({ ...state, query })),
  clearQuery: () => set({ query: "" }),
  selectedProduct: {},
  setSelectedProduct: (selectedProduct: any) => set({ selectedProduct }),
  clearSelectedProduct: () => set({ selectedProduct: {} }),
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
  error: "",
  setError: (error: string) => set({ error }),
}));

export const selectProduct = (state: any) => state.productSlice.products;
export const selectQuery = (state: any) => state.productSlice.query;
export const setSearch = (state: any) => state.productSlice.search;
