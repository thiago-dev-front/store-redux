import {Star, Plus, Minus , Trash} from '@phosphor-icons/react'
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/actions/cartActions';

interface CartItem {
    id: number;
    title: string;
    image?: string;
    price: number;
    rate: number
}

interface ProductInfoProps {
    products: CartItem[];
    handleAddToCart?: (product: CartItem) => void;
    handleIncreaseQuantity?: (id: number) => void;
    handleDecreaseQuantity?: (id: number) => void;
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

    const handleClearCart = (productId: number) => {
        dispatch(clearCart(productId));
      }

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
                                <button onClick={() => handleIncreaseQuantity && handleIncreaseQuantity(product.id)}><Plus size={32} /></button>
                                <button onClick={() => handleDecreaseQuantity && handleDecreaseQuantity(product.id)}><Minus size={32} /></button>
                            </>
                        )}
                    </figure>
                    <button onClick={() => handleClearCart(product.id)}><Trash size={32} /></button>
                </div>
            ))}
        </>
    )
}