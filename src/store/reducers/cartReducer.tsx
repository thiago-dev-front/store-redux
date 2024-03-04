interface CartState {
  quantity: number;
}

const initialState: CartState = {
  quantity: 0,
};

const cartReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case 'INCREASE_QUANTITY':
      return { ...state, quantity: state.quantity + 1 };
    case 'DECREASE_QUANTITY':
      return { ...state, quantity: Math.max(state.quantity - 1, 0) };
    default:
      return state;
  }
};

export default cartReducer;
