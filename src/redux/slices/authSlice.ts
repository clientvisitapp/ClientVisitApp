import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {signInRequest} from '../../api/signIn';

type InitialState = {
  authData: null | {name: string; password: string};
  authError: null | string;
};

const initialState: InitialState = {
  // authData:{name:'',password:''},
  authData: null,
  authError: null,
};

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (value: void, {rejectWithValue}) => {
    try {
      const data = await signInRequest();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuthData(state, action) {
      state.authData = action.payload;
    },
    clearAuthData(state) {
      state.authData = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.authData = action.payload;
        AsyncStorage.setItem('@AuthData', JSON.stringify(action.payload));
        console.log(action.payload, 'from fulfilled');
      })
      .addCase(signIn.rejected, (state, action) => {
        state.authError = 'error';
        console.log(action.payload, 'from rejected');
      })
      .addCase(signIn.pending, (state, action) => {
        console.log(action.payload, 'from pending');
      });
  },
});

export const {updateAuthData, clearAuthData} = authSlice.actions;

export default authSlice.reducer;
