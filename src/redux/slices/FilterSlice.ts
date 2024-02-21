import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter:Infinity, 
};

const FilterSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setStateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setStateFilter } = FilterSlice.actions;

export default FilterSlice.reducer;
