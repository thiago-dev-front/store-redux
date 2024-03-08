
import { CartState } from "../../models/cartState";
import { CartAction } from "../actions/cartActionTypes"

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
        const updatedItemsIncrease = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantityItem: item.quantityItem + 1 }
            : item
        );
    
        const { price } = action.payload;
        return {
          ...state,
          quantity: state.quantity + 1,
          items: updatedItemsIncrease,
          totalPrice: state.totalPrice + price,
        };
      }
      return state;
      case 'DECREASE_QUANTITY':
        const itemToDecreaseQuantity = state.items.find(item => item.id === action.payload.id);
        if (itemToDecreaseQuantity && itemToDecreaseQuantity.quantityItem > 1) {
          const updatedItemsDecrease = state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantityItem: Math.max(item.quantityItem - 1, 0) }
              : item
          );
      
          const { price } = action.payload;
          return {
            ...state,
            quantity: Math.max(state.quantity - 1, 0),
            items: updatedItemsDecrease,
            totalPrice: Math.max(state.totalPrice - price, 0),
          };
        }
        return state;

    case 'ADD_TO_CART':
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      if (existingProduct) {
        return state;
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantityItem: 1 }],
          totalPrice: state.totalPrice + action.payload.price,
          isCartOpen: true,
        };
      }

    case 'TOGGLE_CART':
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    case 'CLEAR_CART':
      const productIdsToRemove  = action.payload;
      const updatedItems = state.items.filter(item => item.id !== productIdsToRemove );
      const totalPrice = updatedItems.reduce((acc, item) => acc + item.price * item.quantityItem, 0);
      return {
        ...state,

        items: updatedItems,
        totalPrice: totalPrice
      };

    default:
      return state;
  }
};

export default cartReducer;
