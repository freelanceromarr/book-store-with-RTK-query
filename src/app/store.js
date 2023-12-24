import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  }, 
  middleware: (getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(apiSlice.middleware)
  }
});
