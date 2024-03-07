
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
      return { ...state, quantity: state.quantity + 1 };
    case 'DECREASE_QUANTITY':
      return { ...state, quantity: Math.max(state.quantity - 1, 0) };
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload]
      };

      case 'CALCULATE_TOTAL_PRICE':
        const calculatedTotalPrice = state.items.reduce((acc, value) => {
          return acc + value.price;
        }, 0);
        return {
          ...state,
          totalPrice: calculatedTotalPrice,
        };
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

        items: updatedItems
      };
      
      

    default:
      return state;
  }
};

export default cartReducer;
