import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as adminService from "~/services/common/adminService";

export const getTotalAdmins = createAsyncThunk(
  "admin/getTotalAdmins",
  async (params, thunkAPI) => {
    const currentAdmins = await adminService.getTotalAdmins();
    return currentAdmins;
  }
);

export const getAdminByUserName = createAsyncThunk(
  "admin/getAdminByUserName",
  async (params, thunkAPI) => {
    const currentAdmins = await adminService.getAdminByUserName(params);
    return currentAdmins;
  }
);

export const getMainWarehouseAdmin = createAsyncThunk(
  "admin/getMainWarehouseAdmin",
  async (params, thunkAPI) => {
    const currentAdmins = await adminService.getMainWarehouseAdmin();
    return currentAdmins;
  }
);

export const getSubWarehouseAdmin = createAsyncThunk(
  "admin/getSubWarehouseAdmin",
  async (params, thunkAPI) => {
    const currentAdmins = await adminService.getSubWarehouseAdmin();
    return currentAdmins;
  }
);

export const addAdmin = createAsyncThunk(
  "admin/addAdmin",
  async (data, thunkAPI) => {
    const currentAdmins = await adminService.addAdmin(data);
    return currentAdmins;
  }
);

export const deleteAdmin = createAsyncThunk(
  "admin/deleteAdmin",
  async (params, thunkAPI) => {
    const currentAdmins = await adminService.deleteAdmin(params);
    return currentAdmins;
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    currentAdmins: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTotalAdmins.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalAdmins.fulfilled, (state, action) => {
      state.loading = false;
      state.currentAdmins = action.payload;
    });

    builder.addCase(getAdminByUserName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAdminByUserName.fulfilled, (state, action) => {
      state.loading = false;
      state.currentAdmins = action.payload;
    });

    builder.addCase(getMainWarehouseAdmin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMainWarehouseAdmin.fulfilled, (state, action) => {
      state.loading = false;
      state.currentAdmins = action.payload;
    });

    builder.addCase(getSubWarehouseAdmin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSubWarehouseAdmin.fulfilled, (state, action) => {
      state.loading = false;
      state.currentAdmins = action.payload;
    });

    builder.addCase(addAdmin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addAdmin.fulfilled, (state, action) => {
      state.loading = false;
      state.currentAdmins = action.payload;
    });

    builder.addCase(deleteAdmin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteAdmin.fulfilled, (state, action) => {
      state.loading = false;
      state.currentAdmins = action.payload;
    });
  },
});

const { reducer: adminReducer } = adminSlice;

export default adminReducer;
