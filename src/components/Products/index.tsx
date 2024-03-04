import { useDispatch, useSelector } from 'react-redux';
import { addToCart, toggleCart } from '../../store/actions/cartActions';
import Cart from '../Cart';

interface CartState {
  cart: {
    isCartOpen: boolean;
  };
}

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number; 
}


const Products = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state: CartState) => state.cart.isCartOpen);


  const simulatedProducts = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 100 },
    { id: 2, name: 'Product 3', description: 'Description for Product 2', price: 200 },
    { id: 3, name: 'Product 4', description: 'Description for Product 3', price: 300 },
    { id: 4, name: 'Product 5', description: 'Description for Product 4', price: 400 },
    { id: 5, name: 'Product 6', description: 'Description for Product 5', price: 500 },
    { id: 6, name: 'Product 7', description: 'Description for Product 6', price: 600 },
    { id: 7, name: 'Product 8', description: 'Description for Product 7', price: 700 },
    { id: 8, name: 'Product 9', description: 'Description for Product 8', price: 800 },
    { id: 9, name: 'Product 10', description: 'Description for Product 9', price: 900 },
    { id: 10, name: 'Product 11', description: 'Description for Product 10', price: 1000 },
    { id: 11, name: 'Product 12', description: 'Description for Product 11', price: 1100 },
    { id: 12, name: 'Product 13', description: 'Description for Product 12', price: 1200 },
  ];

  const handleAddToCart = (product: CartItem) => {
    dispatch(addToCart(product));
    dispatch(toggleCart());
  };



  return (
    <div>
      <h1>Products</h1>
      <ul>
        {simulatedProducts.map((product) => (
          <li key={product.id}>
            <div>{product.name}</div>
            <div>{product.description}</div>
            <button onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ul>
      {/* Renderizar o componente Cart se isCartOpen for verdadeiro */}
      {isCartOpen && <Cart />}
    </div>
  );
};

export default Products;
