// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import courseItems from '../courseItem';

const initialState = {
  cartItems: courseItems,
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, img, quantity } = action.payload;
      const newItem = { id, title, price, img, quantity };
      state.cartItems.push(newItem);
      state.quantity += quantity;
      state.total += price * quantity;
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const itemToRemove = state.cartItems.find(item => item.id === itemId);

      if (itemToRemove) {
        state.quantity -= itemToRemove.quantity;
        state.total -= itemToRemove.price * itemToRemove.quantity;
        state.cartItems = state.cartItems.filter(item => item.id !== itemId);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.quantity = 0;
      state.total = 0;
    },
    // Add other actions as needed
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
