
interface CartItem {
    id: number;
    title: string;
    image?: string;
    price: number;
}

interface ProductInfoProps {
    products: CartItem[];
    handleAddToCart?: (product: CartItem) => void;
    handleIncreaseQuantity?: (id: number) => void;
    handleDecreaseQuantity?: (id: number) => void;
    showButtons: boolean;
}

export default function ProductInfo({ products, handleAddToCart, handleIncreaseQuantity, handleDecreaseQuantity, showButtons }: ProductInfoProps) {

    return (
        <>
            {products.map((product) => (
                <div key={product.id}>
                    <figure>
                        <img className="max-w-60" src={product.image} alt={product.title} />
                        <figcaption>
                            <div>{product.title}</div>
                            <div>{product.price}</div>
                            <button onClick={() => handleAddToCart && handleAddToCart(product)}>Adicionar ao Carrinho</button>
                        </figcaption>
                        {showButtons && (
                            <>
                                <button onClick={() => handleIncreaseQuantity && handleIncreaseQuantity(product.id)}>+</button>
                                <button onClick={() => handleDecreaseQuantity && handleDecreaseQuantity(product.id)}>-</button>
                            </>
                        )}
                    </figure>
                </div>
            ))}
        </>
    )
}