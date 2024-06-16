import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as serviceSupplierService from "~/services/common/serviceSupplierService";

export const getAll = createAsyncThunk(
  "serviceSupplier/getAll",
  async (params, thunkAPI) => {
    const currentServiceSuppliers = await serviceSupplierService.getAll();
    return currentServiceSuppliers;
  }
);

export const addServiceSupplier = createAsyncThunk(
  "serviceSupplier/addServiceSupplier",
  async (data, thunkAPI) => {
    const currentServiceSuppliers =
      await serviceSupplierService.addServiceSupplier(data);
    return currentServiceSuppliers;
  }
);

const serviceSupplierSlice = createSlice({
  name: "serviceSupplier",
  initialState: {
    currentServiceSuppliers: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentServiceSuppliers = action.payload;
    });

    builder.addCase(addServiceSupplier.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addServiceSupplier.fulfilled, (state, action) => {
      state.loading = false;
      state.currentServiceSuppliers = action.payload;
    });
  },
});

const { reducer: serviceSupplierReducer } = serviceSupplierSlice;

export default serviceSupplierReducer;
