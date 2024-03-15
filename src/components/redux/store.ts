import { configureStore } from '@reduxjs/toolkit';
import scoreSlice from './scoreSlice';

const store = configureStore({
  reducer: {
    score: scoreSlice.reducer, // Add the score slice to the rootReducer
  },
});

export default store;