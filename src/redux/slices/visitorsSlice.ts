import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {contactRequest} from '../../api/contactApi';
import {placesToVisitRequest} from '../../api/placesToVisitApi';
import {visitorsRequest} from '../../api/visitorsApi';
import {placesToVisit, formattedPlacesToVisit, contactsType} from '../../types';
import {completed, inProgress} from './loaderSlice';

type InitialState = {
  visitors: contactsType[];
};

const initialState: InitialState = {
  visitors: [],
};

export const getVisitors = createAsyncThunk(
  'visitors/getVisitors',
  async (value: void, {rejectWithValue, dispatch}) => {
    try {
      dispatch(inProgress());
      const data = await visitorsRequest();
      dispatch(completed());
      return data;
    } catch (error) {
      dispatch(completed());
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

const visitorsSlice = createSlice({
  name: 'visitors',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getVisitors.fulfilled, (state, action) => {
        const contactsResult = action?.payload?.map(item => ({
          imageSource: item.imageUrl,
          name: item.name,
          phone: item.phoneNumber,
          email: item.emailID,
        }));
        state.visitors = contactsResult;
        console.log(action.payload, 'from fulfilled', state.visitors);
      })
      .addCase(getVisitors.rejected, (state, action) => {
        console.log(action.payload, 'from rejected');
      })
      .addCase(getVisitors.pending, (state, action) => {
        console.log(action.payload, 'from pending');
      });
  },
});

export default visitorsSlice.reducer;
