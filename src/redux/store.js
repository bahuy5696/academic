import { configureStore } from '@reduxjs/toolkit';
import faculty from './Faculty/slice';
export const store = configureStore({
  reducer: { faculty },
});
