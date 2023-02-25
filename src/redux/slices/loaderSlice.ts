import {createSlice} from '@reduxjs/toolkit';

type InitialState = {
  isLoading: boolean;
};

const initialState: InitialState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    inProgress(state) {
      state.isLoading = true;
    },
    completed(state) {
      state.isLoading = false;
    },
  },
});

export const {inProgress, completed} = loaderSlice.actions;

export default loaderSlice.reducer;
