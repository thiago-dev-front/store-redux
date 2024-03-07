
interface CartItem {
  id: number;
  title: string;
  image?: string;
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

export const clearCart = (productId: number) => ({
  type: 'CLEAR_CART',
  payload: productId
});

export const toggleCart = () => ({
  type: 'TOGGLE_CART',
});

export const totalPrice = () => ({
  type: 'CALCULATE_TOTAL_PRICE',
});
