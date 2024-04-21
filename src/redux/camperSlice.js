import { createSlice } from '@reduxjs/toolkit';
import { getAllCampersThunk } from './camperThunk';

const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

const camperSlice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllCampersThunk.pending, state => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(getAllCampersThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllCampersThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});
export const camperReducer = camperSlice.reducer;
