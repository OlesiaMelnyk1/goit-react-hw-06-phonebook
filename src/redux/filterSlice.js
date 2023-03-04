import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterValue: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterValue(state, { payload }) {
      state.filterValue = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilterValue } = filterSlice.actions;
