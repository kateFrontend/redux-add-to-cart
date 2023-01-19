import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishesSlice'

export const store = configureStore({
  reducer: {
    dishes
  },
})