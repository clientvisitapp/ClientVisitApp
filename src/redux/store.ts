import {configureStore} from '@reduxjs/toolkit';

import sample from './slices/sampleSlice';
import loader from './slices/loaderSlice';
import auth from './slices/authSlice';
import agenda from './slices/agendaSlice';
import placesToVisit from './slices/placesToVisitSlice';
import contact from './slices/contactsSlice';
import visitor from './slices/visitorsSlice';

const store = configureStore({
  reducer: {sample, loader, auth, agenda, placesToVisit, contact, visitor},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
