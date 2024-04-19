import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCampers } from 'api/apiCampers';

export const getAllCampersThunk = createAsyncThunk(
  '/adverts/getAllCampers',
  async (_, { rejectWithValue }) => {
    try {
      return await getAllCampers();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
