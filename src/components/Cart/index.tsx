import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, toggleCart, clearCart } from '../../store/actions/cartActions';
import ProductInfo from '../Product-info';

interface CartState {
    cart: {
        quantity: number;
        items: CartItem[];
        isCartOpen: boolean;
    }
}

interface CartItem {
    id: number;
    title: string;
    image?: string,
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

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className={`absolute top-0 right-0 bg-white h-screen max-w-80 min-w-96 shadow ${isCartOpen ? 'block' : 'hidden'}`}>
            <h1>Carrinho</h1>
            <div>Total Items: {totalItems}</div>



            <div>
                <h1>Cart</h1>
                <ul>
                    <ProductInfo products={cartItems} handleIncreaseQuantity={handleIncreaseQuantity}
                        handleDecreaseQuantity={handleDecreaseQuantity} showButtons={true} />
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <div>{item.title}</div>
                            <img src={item.image} alt="" />
                            <button onClick={handleIncreaseQuantity}>+</button>
                            <button onClick={handleDecreaseQuantity}>-</button>
                        </li>
                    ))}
                </ul>
                <button onClick={handleCloseCart}>Fechar Carrinho</button>
                <button onClick={handleClearCart}>Limpar Carrinho</button>
            </div>
        </div>
    );
};

export default Cart;
