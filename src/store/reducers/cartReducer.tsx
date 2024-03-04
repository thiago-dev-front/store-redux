
import { CartAction } from "../actions/cartActionTypes"


interface CartState {
  quantity: number;
  items: CartItem[];
  isCartOpen: boolean;
}

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

const initialState: CartState = {
  quantity: 0,
  items: [],
  isCartOpen: false,
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
    case 'TOGGLE_CART':
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    case 'CLEAR_CART':
      return {
        ...state,
        quantity: 0,
        items: []
      };

    default:
      return state;
  }
};

export default cartReducer;
