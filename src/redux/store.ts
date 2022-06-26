import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './RootReducer';
import logger from 'redux-logger';

export type StoreState = {
  rootReducer: RootState;
}

const middleware = [logger];

export const store = configureStore({
  reducer: { rootReducer },
  middleware,
});

