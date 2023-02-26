import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {contactRequest} from '../../api/contactApi';
import {placesToVisitRequest} from '../../api/placesToVisitApi';
import {placesToVisit, formattedPlacesToVisit, contactsType} from '../../types';
import {completed, inProgress} from './loaderSlice';

type InitialState = {
  contacts: contactsType[];
};

const initialState: InitialState = {
  contacts: [],
};

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (value: void, {rejectWithValue, dispatch}) => {
    try {
      dispatch(inProgress());
      const data = await contactRequest();
      dispatch(completed());
      return data;
    } catch (error) {
      dispatch(completed());
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        const contactsResult = action?.payload?.map(item => ({
          imageSource: item.imageUrl,
          name: item.name,
          phone: item.phoneNumber,
          email: item.emailID,
        }));
        state.contacts = contactsResult;
        console.log(action.payload, 'from fulfilled', state.contacts);
      })
      .addCase(getContacts.rejected, (state, action) => {
        console.log(action.payload, 'from rejected');
      })
      .addCase(getContacts.pending, (state, action) => {
        console.log(action.payload, 'from pending');
      });
  },
});

export const {} = contactsSlice.actions;

export default contactsSlice.reducer;
