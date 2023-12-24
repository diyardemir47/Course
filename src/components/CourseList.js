// CourseList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseItem from './CourseItem';
import { clearCart } from '../control/cartSlice';

function CourseList() {
  const dispatch = useDispatch();
  const { cartItems, quantity, total } = useSelector(state => state.cart) || { cartItems: [], quantity: 0, total: 0 };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      {cartItems.map((item) => (
        <CourseItem key={item.id} {...item} />
      ))}
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
}

export default CourseList;
