import { productItem } from "../../models/cartState";

export const increaseQuantity = (id: number, price: number) => ({
  type: 'INCREASE_QUANTITY',
  payload: { id, price },
});

export const decreaseQuantity = (id: number, price: number) => ({
  type: 'DECREASE_QUANTITY',
  payload: { id, price },
});

export const addToCart = (product: productItem) => ({
  type: 'ADD_TO_CART',
  payload: product
});

export const clearCart = (productId: number) => ({
  type: 'CLEAR_CART',
  payload: productId
});

export const toggleCart = () => ({
  type: 'TOGGLE_CART',
});
