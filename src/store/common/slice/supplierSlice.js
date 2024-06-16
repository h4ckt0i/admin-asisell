import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as supplierService from "~/services/common/supplierService";

export const getAll = createAsyncThunk(
  "supplier/getAll",
  async (params, thunkAPI) => {
    const currentSuppliers = await supplierService.getAll();
    return currentSuppliers;
  }
);

export const addSupplier = createAsyncThunk(
  "supplier/addSupplier",
  async (data, thunkAPI) => {
    const currentSuppliers = await supplierService.addSupplier(data);
    return currentSuppliers;
  }
);

const supplierSlice = createSlice({
  name: "supplier",
  initialState: {
    currentSuppliers: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentSuppliers = action.payload;
    });

    builder.addCase(addSupplier.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addSupplier.fulfilled, (state, action) => {
      state.loading = false;
      state.currentSuppliers = action.payload;
    });
  },
});

const { reducer: supplierReducer } = supplierSlice;

export default supplierReducer;
