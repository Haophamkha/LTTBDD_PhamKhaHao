import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "./store";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "./cartSlice";

import { books } from "../data/books";

export function useCart() {
  const dispatch = useDispatch<AppDispatch>();

  const items = useSelector((state: RootState) => state.cart.items);

  const add = (bookId: string, quantity: number = 1) => {
    dispatch(
      addToCart({
        bookId,
        quantity,
      }),
    );
  };

  const remove = (bookId: string) => {
    dispatch(removeFromCart(bookId));
  };

  const update = (bookId: string, quantity: number) => {
    dispatch(
      updateQuantity({
        bookId,
        quantity,
      }),
    );
  };

  const clear = () => {
    dispatch(clearCart());
  };

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalAmount = items.reduce((sum, item) => {
    const book = books.find((book) => book.id === item.bookId);

    if (!book) return sum;

    const rawPrice = Number(book.price.replace(/\D/g, ""));

    return sum + rawPrice * item.quantity;
  }, 0);

  const cartItems = items
    .map((item) => {
      const book = books.find((book) => book.id === item.bookId);

      if (!book) return null;

      const rawPrice = Number(book.price.replace(/\D/g, ""));

      return {
        ...book,
        bookId: item.bookId,
        quantity: item.quantity,
        rawPrice,
      };
    })
    .filter((item) => item !== null);

  return {
    items,
    cartItems,
    totalQuantity,
    totalAmount,
    add,
    remove,
    update,
    clear,
  };
}
