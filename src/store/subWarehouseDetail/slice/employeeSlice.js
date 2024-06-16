import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as employeeService from "~/services/subWarehouseDetail/employeeService";

export const getAll = createAsyncThunk(
  "employee/getAll",
  async (params, thunkAPI) => {
    const currentEmployees = await employeeService.getAll(params);
    return currentEmployees;
  }
);

export const getTotalEmployees = createAsyncThunk(
  "employee/getTotalEmployees",
  async (params, thunkAPI) => {
    const currentEmployees = await employeeService.getTotalEmployees(params);
    return currentEmployees;
  }
);

export const getAllManagers = createAsyncThunk(
  "employee/getAllManagers",
  async (params, thunkAPI) => {
    const currentEmployees = await employeeService.getAllManagers(params);
    return currentEmployees;
  }
);

export const getAllStaff = createAsyncThunk(
  "employee/getAllStaff",
  async (params, thunkAPI) => {
    const currentEmployees = await employeeService.getAllStaff(params);
    return currentEmployees;
  }
);

export const getMostPosition = createAsyncThunk(
  "employee/getMostPosition",
  async (params, thunkAPI) => {
    const currentEmployees = await employeeService.getMostPosition(params);
    return currentEmployees;
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    currentEmployees: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentEmployees = action.payload;
    });

    builder.addCase(getTotalEmployees.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalEmployees.fulfilled, (state, action) => {
      state.loading = false;
      state.currentEmployees = action.payload;
    });

    builder.addCase(getAllManagers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllManagers.fulfilled, (state, action) => {
      state.loading = false;
      state.currentEmployees = action.payload;
    });

    builder.addCase(getAllStaff.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllStaff.fulfilled, (state, action) => {
      state.loading = false;
      state.currentEmployees = action.payload;
    });

    builder.addCase(getMostPosition.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMostPosition.fulfilled, (state, action) => {
      state.loading = false;
      state.currentEmployees = action.payload;
    });
  },
});

const { reducer: employeeSubWarehouseReducer } = employeeSlice;

export default employeeSubWarehouseReducer;
