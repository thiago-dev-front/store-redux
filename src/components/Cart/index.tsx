import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, toggleCart } from '../../store/actions/cartActions';
import ProductInfo from '../Product-info';
import { X } from "@phosphor-icons/react"
import { CartState } from '../../models/cartState';

const Cart = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector((state: { cart: CartState }) => state.cart.isCartOpen);
    const cartItems = useSelector((state: { cart: CartState }) => state.cart.items);
    const totalItems = cartItems.reduce((total, item) => total + item.quantityItem, 0);
    const calculateTotalPrice = useSelector((state: { cart: CartState }) => state.cart.totalPrice);

    console.log('isCartOpen', isCartOpen)

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
        <div className={`absolute top-0 right-0 p-6 bg-white h-screen max-w-80 min-w-96 shadow z-10 ${isCartOpen ? 'block' : 'hidden'}`}>
        {cartItems.length > 0 ? (
          <>
            <h1 className='text-xl font-bold text-violet-900'>Resumo da compra</h1>
            <div className='flex justify-between p-3 border-b mb-4'>
              <div className='font-bold text-gray-500'>Subtotal ({`${totalItems} ${totalItems !== 1 ? 'itens' : 'item'}`})</div>
              <div className='font-bold'>Valor total  <strong>R${calculateTotalPrice}</strong></div>
            </div>
            <div>
              <div>
                <ProductInfo
                  products={cartItems}
                  handleIncreaseQuantity={(id: number, price: number) => handleIncreaseQuantity(id, price)}
                  handleDecreaseQuantity={(id: number, price: number) => handleDecreaseQuantity(id, price)}
                  isCartPage={true}
                />
              </div>
              <button onClick={handleCloseCart} className='absolute top-0 right-0 mt-4 mr-6'><X size={24} /></button>
            </div>
          </>
        ) : (
          <>
            <div className='text-center text-gray-500 mt-8'>Você não tem nenhum produto no carrinho</div>
            <button onClick={handleCloseCart} className='absolute top-0 right-0 mt-4 mr-6'><X size={24} /></button>
          </>
        
          
        )}
      </div>
      
    );
};

export default Cart;
