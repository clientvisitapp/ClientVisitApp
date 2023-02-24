import {configureStore} from '@reduxjs/toolkit';

import sample from './slices/sampleSlice';
import auth from './slices/authSlice';
import agenda from './slices/agendaSlice';
import placesToVisit from './slices/placesToVisitSlice';
import contact from './slices/contactsSlice';

const store = configureStore({
  reducer: {sample, auth, agenda, placesToVisit, contact},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
