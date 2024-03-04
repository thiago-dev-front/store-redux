import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../../store/actions/cartActions';

const Products = () => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity());
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity());
  };

  return (
    <div>
      <h1>Products</h1>
      <button onClick={handleIncreaseQuantity}>Increase Quantity</button>
      <button onClick={handleDecreaseQuantity}>Decrease Quantity</button>
    </div>
  );
};

export default Products;
