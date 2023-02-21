import {configureStore} from '@reduxjs/toolkit';

import sample from './slices/sampleSlice';

const store = configureStore({reducer: {sample}});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
