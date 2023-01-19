import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishesSlice';
import cart from './cartSlice'

export const store = configureStore({
  reducer: {
    dishes,
    cart
  },
})