interface CartItem {
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface AddToCartAction {
    type: 'ADD_TO_CART';
    payload: CartItem;
}

export interface IncreaseQuantityAction {
    type: 'INCREASE_QUANTITY';
}

export interface DecreaseQuantityAction {
    type: 'DECREASE_QUANTITY';
}

export interface ClearCartAction {
    type: 'CLEAR_CART';
}

export interface ToggleCartAction {
    type: 'TOGGLE_CART';
}

export type CartAction = AddToCartAction | IncreaseQuantityAction | DecreaseQuantityAction | ClearCartAction | ToggleCartAction;