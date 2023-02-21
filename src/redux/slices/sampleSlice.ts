import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const sampleAsync = createAsyncThunk(
  'sample/sampleAsyncGet',
  async (
    {
      onSuccess,
      onFailure,
    }: {
      onSuccess: () => void;
      onFailure: () => void;
    },
    {rejectWithValue},
  ) => {
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/typicode/demo/profile',
      );
      const data = await response.json();
      onSuccess();
      return data;
    } catch (error) {
      onFailure();
      return rejectWithValue('error');
    }
  },
);

const sampleSlice = createSlice({
  name: 'sample',
  initialState: {ex: 2},
  reducers: {
    sample1(state, action) {
      state.ex = action.payload;
    },
    sample2(state, action) {},
  },
  extraReducers(builder) {
    builder
      .addCase(sampleAsync.fulfilled, (state, action) => {
        console.log(action.payload, 'from fulfilled');
      })
      .addCase(sampleAsync.rejected, (state, action) => {
        console.log(action.payload, 'from rejected');
      })
      .addCase(sampleAsync.pending, (state, action) => {
        console.log(action.payload, 'from pending');
      });
  },
});

export const {sample1, sample2} = sampleSlice.actions;

export default sampleSlice.reducer;
