import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {placesToVisitRequest} from '../../api/placesToVisitApi';
import {placesToVisit, formattedPlacesToVisitType} from '../../types';

type InitialState = {
  placesToVisit: placesToVisit[];
};

const initialState: InitialState = {
  placesToVisit: [],
};

export const getPlacesToVisit = createAsyncThunk(
  'placesToVisit/getPlacesToVisit',
  async (value: void, {rejectWithValue}) => {
    try {
      const data = await placesToVisitRequest();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const placesToVisitSlice = createSlice({
  name: 'placesToVisit',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPlacesToVisit.fulfilled, (state, action) => {
        const mappedPlacesToVisit = {};
        const placesToVisitResult: placesToVisit[] = [];
        const formattedPlacesToVisit = action.payload.map(item => {
          return {
            location: item.location,
            placeDetail: {
              heading: item.attraction,
              imageSource: item.imageUrl,
            },
          };
        });
        formattedPlacesToVisit.map((item: formattedPlacesToVisitType) => {
          if (mappedPlacesToVisit[item.location]) {
            mappedPlacesToVisit[item.location] = {
              ...mappedPlacesToVisit[item.location],
              placeDetails: [
                ...mappedPlacesToVisit[item.location].placeDetails,
                item.placeDetail,
              ],
            };
          } else {
            mappedPlacesToVisit[item.location] = {
              location: item.location,
              placeDetails: [item.placeDetail],
            };
          }
        });
        Object.keys(mappedPlacesToVisit).map(item => {
          placesToVisitResult.push(mappedPlacesToVisit[item]);
        });
        state.placesToVisit = placesToVisitResult;
        console.log(
          action.payload,
          'from fulfilled',
          JSON.stringify(state.placesToVisit),
        );
      })
      .addCase(getPlacesToVisit.rejected, (state, action) => {
        console.log(action.payload, 'from rejected');
      })
      .addCase(getPlacesToVisit.pending, (state, action) => {
        console.log(action.payload, 'from pending');
      });
  },
});

export const {} = placesToVisitSlice.actions;

export default placesToVisitSlice.reducer;