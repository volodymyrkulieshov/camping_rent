const { createSlice } = require('@reduxjs/toolkit');
const { getAllCampersThunk } = require('./camperThunk');

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
        state.campers = action.payload;
      })
      .addCase(getAllCampersThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});
export default camperSlice.reducer;
