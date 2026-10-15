import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  bookId: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ bookId: string; quantity?: number }>,
    ) => {
      const { bookId, quantity = 1 } = action.payload;

      const existingItem = state.items.find((item) => item.bookId === bookId);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          bookId,
          quantity,
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.bookId !== action.payload,
      );
    },

    updateQuantity: (
      state,
      action: PayloadAction<{
        bookId: string;
        quantity: number;
      }>,
    ) => {
      const { bookId, quantity } = action.payload;

      const item = state.items.find((item) => item.bookId === bookId);

      if (!item) return;

      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.bookId !== bookId);
      } else {
        item.quantity = quantity;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
