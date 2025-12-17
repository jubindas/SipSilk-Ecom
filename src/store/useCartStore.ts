/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

import { persist } from "zustand/middleware";

interface CartItem {
  id: string;
  title: string;
  price: number;
  mrp: number;
  qty: number;
  size: string | null;
  images: any[];
}

interface CartState {
  items: CartItem[];
  addToCart: (product: any, qty?: number, size?: string | null) => void;
  updateQty: (index: number, qty: number) => void;
  removeItem: (index: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product: any, qty: number = 1, size: string | null = null) => {
        const items = get().items;
        const existing = items.find(
          (i) => i.id === product.id && i.size === size
        );

        if (existing) {
          set({
            items: items.map((i) =>
              i.id === product.id && i.size === size
                ? { ...i, qty: i.qty + qty }
                : i
            ),
          });
        } else {
          set({
            items: [
              ...items,
              {
                id: product.id,
                title: product.title,
                price: product.price,
                mrp: product.mrp,
                qty,
                size,
                images: product.images,
              },
            ],
          });
        }
      },

      updateQty: (index: number, qty: number) => {
        const items = [...get().items];
        if (qty <= 0) {
          items.splice(index, 1);
        } else {
          items[index].qty = qty;
        }
        set({ items });
      },

      removeItem: (index: number) => {
        const items = [...get().items];
        items.splice(index, 1);
        set({ items });
      },

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "zustand_cart_storage",
    }
  )
);
