import { create } from "zustand";

export const useSearchSlice = create((set) => ({
  search: "",
  setSearch: (search: string) => set({ search }),
  clearSearch: () => set({ search: "" }),
  query: "",
  setQuery: (query: string) => set((state: any) => ({ ...state, query })),
}));

export const selectSearch = (state: any) => state.searchSlice.search;
export const selectSearchQuery = (state: any) => state.searchSlice.query;
