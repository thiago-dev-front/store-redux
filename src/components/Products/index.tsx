import { useDispatch, useSelector } from 'react-redux';
import { addToCart, toggleCart } from '../../store/actions/cartActions';
import Cart from '../Cart';
import ProductInfo from '../Product-info';

interface CartState {
  cart: {
    isCartOpen: boolean;
  };
}

interface UserState {
  user: {
    name: string,
    login: string
  }
}

interface CartItem {
  id: number;
  title: string;
  image?: string;
  price: number;
}


const Products = () => {
  const dispatch = useDispatch();
  const user = useSelector(((state: UserState) => state.user))

  const isCartOpen = useSelector((state: CartState) => state.cart.isCartOpen);


  const simulatedProducts = [
    { id: 1, title: 'Fone X', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 100 },
    { id: 2, title: 'Tenis Nike', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 200 },
    { id: 3, title: 'Louça Top', image: 'https://plus.unsplash.com/premium_photo-1676717962720-d9a812c8f8c9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 300 },
    { id: 4, title: 'Maquiagem Top', image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 400 },
    { id: 5, title: 'Relógio D+', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 500 },
    { id: 6, title: 'Tênis Foda', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 600 },
    { id: 7, title: 'Perfume Top', image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 700 },
    { id: 8, title: 'Relógio S+', image: 'https://images.unsplash.com/photo-1593998066526-65fcab3021a2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 800 },
    { id: 9, title: 'Sapatilha Top', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 900 },
    { id: 10, title: 'Hidradante D+', image: 'https://images.unsplash.com/photo-1598460880248-71ec6d2d582b?q=80&w=2014&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 1000 },
    { id: 11, title: 'Chuteira Master', image: 'https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 1100 },
    { id: 12, title: 'Faixa Mestre', image: 'https://images.unsplash.com/photo-1634283715079-d91bbed0ece0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 1200 },
  ];

  const handleAddToCart = (product: CartItem) => {
    dispatch(addToCart(product));
    dispatch(toggleCart());
  };

  return (
    <div>
      <h1>Products {user.name} {user.login}</h1>

      <div className="min-w-[930px] max-w-5xl mx-auto">
        <div className='grid grid-cols-4'>
          <ProductInfo products={simulatedProducts} handleAddToCart={handleAddToCart} showButtons={false} />
        </div>
      </div>
      {isCartOpen && <Cart />}
    </div>
  );
};

export default Products;
