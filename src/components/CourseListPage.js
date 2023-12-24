// CourseListPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseItem from './CourseItem';
import { addToCart } from '../control/cartSlice';
import courseItems from '../courseItem';

function CourseListPage() {
  const dispatch = useDispatch();

  const handleAddToCart = (course) => {
    dispatch(addToCart(course));
  };

  return (
    <div>
      <h2>Available Courses</h2>
      {courseItems.map((course) => (
        <div key={course.id}>
          <CourseItem {...course} />
          <button onClick={() => handleAddToCart(course)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default CourseListPage;
