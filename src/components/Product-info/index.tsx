import { Star, Plus, Minus, Trash } from '@phosphor-icons/react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/actions/cartActions';
import { CartState, productItem } from '../../models/cartState';

interface ProductInfoProps {
    products: productItem[];
    handleAddToCart?: (product: productItem) => void;
    handleIncreaseQuantity?: (id: number, price: number) => void;
    handleDecreaseQuantity?: (id: number, price: number) => void;
    isCartPage: boolean;
}


function renderStars(rate: number) {
    const stars = [];
    for (let i = 0; i < rate; i++) {
        stars.push(<Star key={i} size={20} color="yellow" />);
    }
    return stars;
}


export default function ProductInfo({ products, handleAddToCart, handleIncreaseQuantity, handleDecreaseQuantity, isCartPage }: ProductInfoProps) {
    const dispatch = useDispatch();
    // const cartItems = useSelector((state: CartState) => state.cart.items);

    const isCartOpen = useSelector((state: { cart: CartState }) => state.cart.isCartOpen);

    const handleClearCart = (productIds: number) => {
        dispatch(clearCart(productIds));
    }

    console.log('state', isCartOpen)

    return (
        <>
            {products.map((product) => (
                <div key={product.id} className={`relative border rounded-md mb-4 ${isCartPage ? 'rounded' : 'rounded-t-2xl'}`}>
                    <figure>
                        <div className={`${isCartPage ? 'flex' : 'inherit'}`}>
                            <img className={` ${isCartPage ? 'min-w-[176px] max-w-[176px] max-h-[134px] object-cover p-4' : 'min-w-full h-40 object-cover rounded-t-2xl'}`}
                                src={product.image} alt={product.title} />
                            <figcaption className="m-4 space-y-1.5">
                                <div className="text-lg font-bold">{product.title}</div>
                                <div className="text-lg font-bold">R${product.price}</div>
                                {isCartPage && <div className='bg-emerald-600 p-1 rounded-md'>
                                    <span className='text-white text-sm text-center block'>Frete Gratis</span>
                                </div>}

                                <div className='flex'>
                                    {!isCartPage && renderStars(product.rate)}
                                </div>
                                {!isCartPage && <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 w-full rounded-lg "
                                    onClick={() => handleAddToCart && handleAddToCart(product)}>Adicionar ao Carrinho</button>}

                            </figcaption>
                        </div>

                    </figure>

                    {isCartPage && (
                        <div>
                            <div className='flex items-center mx-4 mb-2 space-x-3'>
                                <span className='text-sm font-bold text-gray-500'>Quantidade:</span>
                                <button className="border rounded-full" onClick={() => handleDecreaseQuantity && handleDecreaseQuantity(product.id, product.price)}><Minus size={20} color='gray' className='px-0.5' /></button>
                                <div className='border min-w-9 text-center rounded'>
                                    <span className='font-bold'>{product.quantityItem}</span>
                                </div>
                                <button className="border rounded-full" onClick={() => handleIncreaseQuantity && handleIncreaseQuantity(product.id, product.price)}><Plus size={20} color='gray' className='px-0.5' /></button>
                            </div>
                        </div>
                    )}
                    {isCartPage && <button className='absolute top-0 right-0 mt-4 mr-4' onClick={() => handleClearCart(product.id)}>
                        <Trash size={22} /></button>}

                </div>
            ))}
        </>
    )
}