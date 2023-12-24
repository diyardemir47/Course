import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../control/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CourseItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, img, quantity: 1 }));
  };

  return (
    <div className="course-item">
      <img src={img} alt={title} className="course-image" />
      <div className="course-details">
        <h4 className="course-title">{title}</h4>
        <p className="course-price">${price}</p>
        <p className="course-quantity">Quantity: {quantity}</p>
        <button onClick={handleAddToCart}>
          Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
}

export default CourseItem;
