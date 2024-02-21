import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '', 
};

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = SearchSlice.actions;

export default SearchSlice.reducer;
