import { create } from "zustand";
import { FetchData } from "../fetchFromAPI";

const useProductsStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    const response = await FetchData();
    if (!response) return alert("Error fetching products");
    set({ products: response?.items });
  },
}));

export default useProductsStore;
