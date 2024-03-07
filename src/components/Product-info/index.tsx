import {Star, Plus, Minus} from '@phosphor-icons/react'

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
                </div>
            ))}
        </>
    )
}