
interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

export const increaseQuantity = () => ({
  type: 'INCREASE_QUANTITY',
});

export const decreaseQuantity = () => ({
  type: 'DECREASE_QUANTITY',
});

export const addToCart = (product: CartItem) => ({
  type: 'ADD_TO_CART',
  payload: product
});

export const clearCart = () => ({
  type: 'CLEAR_CART'
});

export const toggleCart = () => ({
  type: 'TOGGLE_CART',
});