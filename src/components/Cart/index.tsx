import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, toggleCart } from '../../store/actions/cartActions';

interface CartState {
    cart: {
        quantity: number;
        items: CartItem[];
        isCartOpen: boolean;
    }
}

interface CartItem {
    id: number;
    name: string;
    description: string;
    price: number;
}

const Cart = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector((state: CartState) => state.cart.isCartOpen);
    const totalItems = useSelector((state: CartState) => state.cart.quantity);
    const cartItems = useSelector((state: CartState) => state.cart.items);


    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity());
    };

    const handleDecreaseQuantity = () => {
        dispatch(decreaseQuantity());
    };

    const handleCloseCart = () => {
        dispatch(toggleCart());
    };

    return (
        <div className={`absolute top-0 right-0 bg-white h-screen max-w-80 min-w-96 shadow ${isCartOpen ? 'block' : 'hidden'}`}>
            <h1>Carrinho</h1>
            <div>Total Items: {totalItems}</div>


            <div>
                <h1>Cart</h1>
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <div>{item.name}</div>
                            <div>{item.description}</div>
                            <button onClick={handleIncreaseQuantity}>+</button>
                            <button onClick={handleDecreaseQuantity}>-</button>
                        </li>
                    ))}
                </ul>
                <button onClick={handleCloseCart}>Fechar Carrinho</button>
            </div>
        </div>
    );
};

export default Cart;
