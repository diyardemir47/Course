import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../control/cartSlice'; // Import necessary actions
import './CartModal.css'; // Import your CSS file for styling

function CartModal({ closeModal }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    closeModal();
  };

  return (
    <div className='modalOverlay'>
      <div className='modalContent'>
        <span className='closeModal' onClick={closeModal}>&times;</span>
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} 
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
    </div>
  );
}

export default CartModal;
