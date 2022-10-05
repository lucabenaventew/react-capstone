import { configureStore } from '@reduxjs/toolkit';
import herosSlice from './HomeReducer/HomeReducer';

const store = configureStore({
  reducer: {
    heros: herosSlice,
  },
});

export default store;
