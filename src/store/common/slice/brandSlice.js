import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as brandService from "~/services/common/brandService";

export const getAll = createAsyncThunk(
  "brand/getAll",
  async (params, thunkAPI) => {
    const currentBrands = await brandService.getAll();
    return currentBrands;
  }
);

export const addBrand = createAsyncThunk(
  "brand/addBrand",
  async (data, thunkAPI) => {
    const currentBrands = await brandService.addBrand(data);
    return currentBrands;
  }
);

const brandSlice = createSlice({
  name: "brand",
  initialState: {
    currentBrands: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentBrands = action.payload;
    });

    builder.addCase(addBrand.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addBrand.fulfilled, (state, action) => {
      state.loading = false;
      state.currentBrands = action.payload;
    });
  },
});

const { reducer: brandReducer } = brandSlice;

export default brandReducer;
