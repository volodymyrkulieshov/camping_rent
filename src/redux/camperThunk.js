import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCampers } from 'api/apiCampers';

export const getAllCampersThunk = createAsyncThunk(
  '/adverts/getAllCampers',
  async (page, { rejectWithValue }) => {
    try {
      return await getAllCampers(page);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
