import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {agendaRequest} from '../../api/agendaApi';
import {agenda, formattedAgenda} from '../../types';

type InitialState = {
  agenda: agenda;
};

const initialState: InitialState = {
  agenda: [],
};

export const getAgenda = createAsyncThunk(
  'agenda/getAgenda',
  async (value: void, {rejectWithValue}) => {
    try {
      const data = await agendaRequest();
      return data;
    } catch (error) {
      return rejectWithValue(error);
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
        const agendaResult: agenda = [];
        const formattedResponse = action.payload.map(item => ({
          date: item.dateOfVisit,
          activityDetail: {
            title: item.agendaActivityTitle,
            description: item.agendaActivityDetails,
            location: item.agendaLocation,
            time: item.agendaStartTime,
          },
        }));
        formattedResponse.map((item: formattedAgenda) => {
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
        Object.keys(mappedAgenda).map(item => {
          agendaResult.push(mappedAgenda[item]);
        });
        state.agenda = agendaResult;
        console.log(
          action.payload,
          'from fulfilled',
          JSON.stringify(state.agenda),
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
