import { configureStore } from '@reduxjs/toolkit';
import { newSliceReducer } from '../NewSlice';

export const store = configureStore({
  reducer: {
    test: newSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
