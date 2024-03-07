import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, toggleCart} from '../../store/actions/cartActions';
import ProductInfo from '../Product-info';
 
import { X } from "@phosphor-icons/react"
interface CartState {
    cart: {
        quantity: number;
        items: CartItem[];
        isCartOpen: boolean;
        totalPrice: number;
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
    const calculateTotalPrice = useSelector((state: CartState) => state.cart.totalPrice);

    
   
    const handleIncreaseQuantity = (id: number, price: number) => {
        dispatch(increaseQuantity(id, price));
    };

    const handleDecreaseQuantity = (id: number, price: number) => {
        dispatch(decreaseQuantity(id, price));
     
    };

    const handleCloseCart = () => {
        dispatch(toggleCart());
    };



    return (
        <div className={`absolute top-0 right-0 p-4 bg-white h-screen max-w-80 min-w-96 shadow ${isCartOpen ? 'block' : 'hidden'}`}>
            <h1 className='text-center font-bold'>Resumo da compra</h1>
            <div className='font-bold'>Subtotal ({totalItems})</div>
            <div className='font-bold'>Subtotal ({calculateTotalPrice})</div>

            <div>
                <div>
                    <ProductInfo products={cartItems}
                      handleIncreaseQuantity={(id: number, price: number) => handleIncreaseQuantity(id, price)}

                      handleDecreaseQuantity={(id: number, price: number) => handleDecreaseQuantity(id, price)}

                    showButtons={true} />
                </div>
                <button onClick={handleCloseCart} className='absolute top-0 right-0 mt-4 mr-4'><X size={32} /></button>
                
            </div>
        </div>
    );
};

export default Cart;
