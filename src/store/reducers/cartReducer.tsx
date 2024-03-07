
import { CartAction } from "../actions/cartActionTypes"


interface CartState {
  quantity: number;
  items: CartItem[];
  isCartOpen: boolean;
  totalPrice: number,
}

interface CartItem {
  id: number;
  title: string;
  image?: string;
  price: number;
}

const initialState: CartState = {
  quantity: 0,
  items: [],
  isCartOpen: false,
  totalPrice: 0,
};

const cartReducer = (state: CartState = initialState, action: CartAction) => {
  switch (action.type) {
    case 'INCREASE_QUANTITY':
  const itemToAddQuantity = state.items.find(item => item.id === action.payload.id);
  if (itemToAddQuantity) {
    const { price } = action.payload;
    return {
      ...state,
      quantity: state.quantity + 1,
      totalPrice: state.totalPrice + price,
    };
  }
  return state;
  case 'DECREASE_QUANTITY':
    const itemToDecreaseQuantity = state.items.find(item => item.id === action.payload.id);
    if (itemToDecreaseQuantity) {
      const { price } = action.payload;
      return {
        ...state,
        quantity: Math.max(state.quantity - 1, 0),
        totalPrice: Math.max(state.totalPrice - price, 0),
      };
    }
    return state;
      
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };

      // case 'CALCULATE_TOTAL_PRICE':
      //   const calculatedTotalPrice = state.items.reduce((acc, value) => {
      //     return acc + value.price;
      //   }, 0);
      //   return {
      //     ...state,
      //     totalPrice: calculatedTotalPrice,
      //   };
    case 'TOGGLE_CART':
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    case 'CLEAR_CART':
      const productIdToRemove = action.payload;
      const updatedItems = state.items.filter(item => item.id !== productIdToRemove);
      return {
        ...state,

        items: updatedItems,
        totalPrice: updatedItems.reduce((acc, value) => acc + value.price, 0),
      };
      
      

    default:
      return state;
  }
};

export default cartReducer;
