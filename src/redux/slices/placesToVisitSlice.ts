import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {placesToVisitRequest} from '../../api/placesToVisitApi';
import {placesToVisitType, formattedPlacesToVisitType} from '../../types';
import {completed, inProgress} from './loaderSlice';

type InitialState = {
  placesToVisitDetails: placesToVisitType[];
};

const initialState: InitialState = {
  placesToVisitDetails: [],
};

export const getPlacesToVisit = createAsyncThunk(
  'placesToVisit/getPlacesToVisit',
  async (value: void, {rejectWithValue, dispatch}) => {
    dispatch(inProgress());
    try {
      const data = await placesToVisitRequest();
      dispatch(completed());
      return data;
    } catch (error) {
      dispatch(completed());
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
        const placesToVisitResult: placesToVisitType[] = [];
        const formattedPlacesToVisit = action.payload.map(item => {
          return {
            location: item.location,
            placeDetail: {
              attraction: item.attraction,
              imageSource: item.imageUrl,
              siteSource: item.siteUrl,
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
        state.placesToVisitDetails = placesToVisitResult;
        console.log(
          action.payload,
          'from fulfilled',
          JSON.stringify(state.placesToVisitDetails),
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
