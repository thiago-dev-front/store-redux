import {Star, Plus, Minus , Trash} from '@phosphor-icons/react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/actions/cartActions';
import { CartState, productItem } from '../../models/cartState';

interface ProductInfoProps {
    products: productItem[];
    handleAddToCart?: (product: productItem) => void;
    handleIncreaseQuantity?: (id: number, price: number) => void;
    handleDecreaseQuantity?: (id: number, price: number) => void;
    showButtons: boolean;
}


function renderStars(rate: number) {
    const stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push(<Star  key={i} size={20} color="yellow" />);
    }
    return stars;
  }


export default function ProductInfo({ products, handleAddToCart, handleIncreaseQuantity, handleDecreaseQuantity, showButtons }: ProductInfoProps) {
    const dispatch = useDispatch();
    // const cartItems = useSelector((state: CartState) => state.cart.items);

    const isCartOpen = useSelector((state: {cart: CartState}) => state.cart.isCartOpen);

    const handleClearCart = (productIds: number) => {
        dispatch(clearCart(productIds));
      }

      console.log('state', isCartOpen)

    return (
        <>
            {products.map((product) => (
                <div key={product.id} className="border rounded-md  rounded-t-2xl mb-4">
                    <figure>
                        <img className="min-w-full h-40 object-cover rounded-t-2xl" src={product.image} alt={product.title} />
                        <figcaption className="m-4 space-y-1.5">
                            <div className="text-lg font-bold">{product.title}</div>
                            <div className="text-lg font-bold">R${product.price}</div>
                            <div className='flex'>
                            {!showButtons &&  renderStars(product.rate)} 
                            </div>
                            {!showButtons &&  <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 w-full rounded-lg "
                            onClick={() => handleAddToCart && handleAddToCart(product)}>Adicionar ao Carrinho</button>}
                           
                        </figcaption>
                        {showButtons && (
                            <>
                                <button onClick={() => handleIncreaseQuantity && handleIncreaseQuantity(product.id, product.price)}><Plus size={32} /></button>
                                <div>{product.quantityItem}</div> 

                                <button onClick={() => handleDecreaseQuantity && handleDecreaseQuantity(product.id, product.price)}><Minus size={32} /></button>
                            </>
                        )}
                    </figure>
                    {showButtons && <button onClick={() => handleClearCart(product.id)}><Trash size={32} /></button>}
                    
                </div>
            ))}
        </>
    )
}