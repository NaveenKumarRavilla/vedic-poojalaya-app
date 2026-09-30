import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Product } from '../types/catalog';

export interface CartItem { product: Product; quantity: number; price: number; }
interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>()(persist((set) => ({
  items: [],
  addItem: (product) => set((state) => {
    const existing = state.items.find((item) => item.product.id === product.id);
    if (product.stock < 1 || (existing && existing.quantity >= product.stock)) return state;
    return { items: existing
      ? state.items.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...state.items, { product, quantity: 1, price: product.sellingPrice }] };
  }),
  setQuantity: (productId, quantity) => set((state) => ({ items: quantity < 1 ? state.items.filter((item) => item.product.id !== productId) : state.items.map((item) => item.product.id === productId ? { ...item, quantity: Math.min(quantity, item.product.stock) } : item) })),
  removeItem: (productId) => set((state) => ({ items: state.items.filter((item) => item.product.id !== productId) })),
  clear: () => set({ items: [] }),
}), { name: 'vedic-poojalaya-cart', storage: createJSONStorage(() => AsyncStorage) }));
