import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as adminTypeService from "~/services/common/adminTypeService";

export const getAll = createAsyncThunk(
  "adminType/getAll",
  async (params, thunkAPI) => {
    const currentAdminTypes = await adminTypeService.getAll();
    return currentAdminTypes;
  }
);

export const getAdmin = createAsyncThunk(
  "adminType/getAdmin",
  async (params, thunkAPI) => {
    const currentAdminTypes = await adminTypeService.getAdmin();
    return currentAdminTypes;
  }
);

export const getSuperAdmin = createAsyncThunk(
  "adminType/getSuperAdmin",
  async (params, thunkAPI) => {
    const currentAdminTypes = await adminTypeService.getSuperAdmin();
    return currentAdminTypes;
  }
);

const adminTypeSlice = createSlice({
  name: "adminType",
  initialState: {
    currentAdminTypes: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentAdminTypes = action.payload;
    });

    builder.addCase(getAdmin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAdmin.fulfilled, (state, action) => {
      state.loading = false;
      state.currentAdminTypes = action.payload;
    });

    builder.addCase(getSuperAdmin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSuperAdmin.fulfilled, (state, action) => {
      state.loading = false;
      state.currentAdminTypes = action.payload;
    });
  },
});

const { reducer: adminTypeReducer } = adminTypeSlice;

export default adminTypeReducer;
