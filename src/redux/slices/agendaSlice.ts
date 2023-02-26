import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {agendaRequest} from '../../api/agendaApi';
import {agendaType, formattedAgenda} from '../../types';
import {completed, inProgress} from './loaderSlice';

type InitialState = {
  agendas: agendaType;
};

const initialState: InitialState = {
  agendas: [],
};

export const getAgenda = createAsyncThunk(
  'agenda/getAgenda',
  async (value: void, {rejectWithValue, dispatch}) => {
    dispatch(inProgress());
    try {
      const data = await agendaRequest();
      dispatch(completed());
      return data;
    } catch (error) {
      dispatch(completed());
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

const agendaSlice = createSlice({
  name: 'agenda',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAgenda.fulfilled, (state, action) => {
        const mappedAgenda = {};
        const agendaResult: agendaType = [];
        const formattedResponse = action?.payload?.map(item => ({
          date: item.dateOfVisit,
          activityDetail: {
            title: item.agendaActivityTitle,
            description: item.agendaActivityDetails,
            location: item.agendaLocation,
            time: item.agendaTime,
            team: item.agendaHostingDetails,
          },
        }));
        formattedResponse?.map((item: formattedAgenda) => {
          if (mappedAgenda[item.date]) {
            mappedAgenda[item.date] = {
              ...mappedAgenda[item.date],
              agendaDetails: [
                ...mappedAgenda[item.date].agendaDetails,
                item.activityDetail,
              ],
            };
          } else {
            mappedAgenda[item.date] = {
              date: item.date,
              agendaDetails: [item.activityDetail],
            };
          }
        });
        Object.keys(mappedAgenda)?.map(item => {
          agendaResult.push(mappedAgenda[item]);
        });
        state.agendas = agendaResult;
        console.log(
          action.payload,
          'from fulfilled',
          JSON.stringify(state.agendas),
        );
      })
      .addCase(getAgenda.rejected, (state, action) => {
        console.log(action.payload, 'from rejected');
      })
      .addCase(getAgenda.pending, (state, action) => {
        console.log(action.payload, 'from pending');
      });
  },
});

export const {} = agendaSlice.actions;

export default agendaSlice.reducer;
