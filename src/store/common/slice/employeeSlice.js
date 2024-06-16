import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as employeeService from "~/services/common/employeeService";

export const getAll = createAsyncThunk(
  "employee/getAll",
  async (params, thunkAPI) => {
    const currentEmployees = await employeeService.getAll();
    return currentEmployees;
  }
);

export const getTotalEmployees = createAsyncThunk(
  "employee/getTotalEmployees",
  async (params, thunkAPI) => {
    const currentEmployees = await employeeService.getTotalEmployees();
    return currentEmployees;
  }
);

export const getAllManagers = createAsyncThunk(
  "employee/getAllManagers",
  async (params, thunkAPI) => {
    const currentEmployees = await employeeService.getAllManagers();
    return currentEmployees;
  }
);

export const getAllStaff = createAsyncThunk(
  "employee/getAllStaff",
  async (params, thunkAPI) => {
    const currentEmployees = await employeeService.getAllStaff();
    return currentEmployees;
  }
);

export const getMostPosition = createAsyncThunk(
  "employee/getMostPosition",
  async (params, thunkAPI) => {
    const currentEmployees = await employeeService.getMostPosition();
    return currentEmployees;
  }
);

export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (data, thunkAPI) => {
    const currentEmployees = await employeeService.addEmployee(data);
    return currentEmployees;
  }
);

export const editEmployee = createAsyncThunk(
  "employee/editEmployee",
  async (data, thunkAPI) => {
    const currentEmployees = await employeeService.editEmployee(data);
    return currentEmployees;
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (params, thunkAPI) => {
    const currentEmployees = await employeeService.deleteEmployee(params);
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

    builder.addCase(addEmployee.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.currentEmployees = action.payload;
    });

    builder.addCase(editEmployee.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.currentEmployees = action.payload;
    });

    builder.addCase(deleteEmployee.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.currentEmployees = action.payload;
    });
  },
});

const { reducer: employeeReducer } = employeeSlice;

export default employeeReducer;
