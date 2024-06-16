import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as salaryService from "~/services/subWarehouseDetail/salaryService";

export const getTotalSalaries = createAsyncThunk(
  "salary/getTotalSalaries",
  async (params, thunkAPI) => {
    const currentSalaries = await salaryService.getTotalSalaries(params);
    return currentSalaries;
  }
);

export const getTotalBonus = createAsyncThunk(
  "salary/getTotalBonus",
  async (params, thunkAPI) => {
    const currentSalaries = await salaryService.getTotalBonus(params);
    return currentSalaries;
  }
);

export const getYearlySalaries = createAsyncThunk(
  "salary/getYearlySalaries",
  async (params, thunkAPI) => {
    const currentSalaries = await salaryService.getYearlySalaries(params);
    return currentSalaries;
  }
);

const salarySlice = createSlice({
  name: "salary",
  initialState: {
    currentSalaries: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTotalSalaries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalSalaries.fulfilled, (state, action) => {
      state.loading = false;
      state.currentSalaries = action.payload;
    });

    builder.addCase(getTotalBonus.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalBonus.fulfilled, (state, action) => {
      state.loading = false;
      state.currentSalaries = action.payload;
    });

    builder.addCase(getYearlySalaries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getYearlySalaries.fulfilled, (state, action) => {
      state.loading = false;
      state.currentSalaries = action.payload;
    });
  },
});

const { reducer: salarySubWarehouseReducer } = salarySlice;

export default salarySubWarehouseReducer;
