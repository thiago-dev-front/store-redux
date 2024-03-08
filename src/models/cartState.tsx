export interface CartState {
    quantity: number;
    items: productItem[];
    isCartOpen: boolean;
    totalPrice: number,
  }

  export interface productItem {
    id: number;
    title: string;
    image?: string;
    quantityItem: number;
    price: number;
    rate: number
  }