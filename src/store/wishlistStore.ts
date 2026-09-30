import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Product } from '../types/catalog';

interface WishlistState {
  products: Product[];
  toggle: (product: Product) => void;
  remove: (productId: string) => void;
}

export const useWishlistStore = create<WishlistState>()(persist((set) => ({
  products: [],
  toggle: (product) => set((state) => ({ products: state.products.some((item) => item.id === product.id)
    ? state.products.filter((item) => item.id !== product.id)
    : [...state.products, product] })),
  remove: (productId) => set((state) => ({ products: state.products.filter((product) => product.id !== productId) })),
}), { name: 'vedic-poojalaya-wishlist', storage: createJSONStorage(() => AsyncStorage) }));
