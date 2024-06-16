import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as salaryService from "~/services/common/salaryService";

export const getAll = createAsyncThunk(
  "salary/getAll",
  async (params, thunkAPI) => {
    const currentSalaries = await salaryService.getAll();
    return currentSalaries;
  }
);

export const getTotalSalaries = createAsyncThunk(
  "salary/getTotalSalaries",
  async (params, thunkAPI) => {
    const currentSalaries = await salaryService.getTotalSalaries();
    return currentSalaries;
  }
);

export const getTotalBonus = createAsyncThunk(
  "salary/getTotalBonus",
  async (params, thunkAPI) => {
    const currentSalaries = await salaryService.getTotalBonus();
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

export const getDetailYearlyEmployeeSalaries = createAsyncThunk(
  "salary/getDetailYearlyEmployeeSalaries",
  async (params, thunkAPI) => {
    const currentSalaries = await salaryService.getDetailYearlyEmployeeSalaries(
      params
    );
    return currentSalaries;
  }
);

export const addSalary = createAsyncThunk(
  "salary/addSalary",
  async (data, thunkAPI) => {
    const currentSalaries = await salaryService.addSalary(data);
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
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentSalaries = action.payload;
    });

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

    builder.addCase(getDetailYearlyEmployeeSalaries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getDetailYearlyEmployeeSalaries.fulfilled,
      (state, action) => {
        state.loading = false;
        state.currentSalaries = action.payload;
      }
    );

    builder.addCase(addSalary.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addSalary.fulfilled, (state, action) => {
      state.loading = false;
      state.currentSalaries = action.payload;
    });
  },
});

const { reducer: salaryReducer } = salarySlice;

export default salaryReducer;
