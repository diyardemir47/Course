/* Navbar.jsx */
import React, { useState } from 'react';
import { CiShoppingBasket } from 'react-icons/ci';
import { AiOutlineDollar } from 'react-icons/ai'; // Import currency icon
import { useSelector } from 'react-redux';
import CartModal from './CartModal'; // Import your CartModal component
import './Navbar.css'; // Import your Navbar component styles

function Navbar() {
  const { quantity, total } = useSelector(state => state.cart);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <nav>
        <div className='navBar'>
          <h3 className='logo'>COURSE APP</h3>
          <div className='navDiv'>
            <div className='itemDiv' onClick={openModal}>
              <CiShoppingBasket className='itemsIcon' />
              <p className='quantity'>{quantity}</p>
            </div>
            <div className='totalDiv' onClick={openModal}>
          
              <p className='totalAmount'>    <AiOutlineDollar className='totalIcon' /> :{total}</p>
            </div>
          </div>
        </div>
      </nav>
      {isModalOpen && <CartModal closeModal={closeModal} />}
    </div>
  );
}

export default Navbar;
