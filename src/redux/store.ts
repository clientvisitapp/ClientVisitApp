import {configureStore} from '@reduxjs/toolkit';

import sample from './slices/sampleSlice';
import auth from './slices/authSlice';

const store = configureStore({reducer: {sample, auth}});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
