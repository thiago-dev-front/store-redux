import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, toggleCart, clearCart } from '../../store/actions/cartActions';
import ProductInfo from '../Product-info';
 
import { X , Trash} from "@phosphor-icons/react"
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
    rate: number
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
        <div className={`absolute top-0 right-0 p-4 bg-white h-screen max-w-80 min-w-96 shadow ${isCartOpen ? 'block' : 'hidden'}`}>
            <h1 className='text-center font-bold'>Resumo da compra</h1>
            <div className='font-bold'>Subtotal ({totalItems})</div>

            <div>
                <div>
                    <ProductInfo products={cartItems} handleIncreaseQuantity={handleIncreaseQuantity}
                        handleDecreaseQuantity={handleDecreaseQuantity} showButtons={true} />
                </div>
                <button onClick={handleCloseCart} className='absolute top-0 right-0 mt-4 mr-4'><X size={32} /></button>
                <button onClick={handleClearCart}><Trash size={32} /></button>
            </div>
        </div>
    );
};

export default Cart;
