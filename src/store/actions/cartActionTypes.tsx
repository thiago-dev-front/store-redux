import { productItem } from "../../models/cartState";


export interface AddToCartAction {
    type: 'ADD_TO_CART';
    payload: productItem;
}

export interface IncreaseQuantityAction {
    type: 'INCREASE_QUANTITY';
    payload: { id: number, price: number },
}

export interface DecreaseQuantityAction {
    type: 'DECREASE_QUANTITY';
    payload: { id: number, price: number },
}

export interface ClearCartAction {
    type: 'CLEAR_CART';
    payload: number;
}

export interface ToggleCartAction {
    type: 'TOGGLE_CART';
}

export interface totalCartPrice {
    type: 'CALCULATE_TOTAL_PRICE';
}

export type CartAction = AddToCartAction | IncreaseQuantityAction | DecreaseQuantityAction | ClearCartAction | ToggleCartAction | totalCartPrice;