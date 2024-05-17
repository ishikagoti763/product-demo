import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import HomeReducer from '../features/counter/Home/HomeSlice'
// import loginReducer from '../features/counter/Home/HomeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: HomeReducer,
  },
});
