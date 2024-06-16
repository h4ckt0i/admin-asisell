import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as subWarehouseService from "~/services/common/subWarehouseService";

export const getAll = createAsyncThunk(
  "subWarehouse/getAll",
  async (params, thunkAPI) => {
    const currentSubWarehouses = await subWarehouseService.getAll();
    return currentSubWarehouses;
  }
);

export const getSubWarehouseById = createAsyncThunk(
  "subWarehouse/getSubWarehouseById",
  async (params, thunkAPI) => {
    const currentSubWarehouses = await subWarehouseService.getSubWarehouseById(
      params
    );
    return currentSubWarehouses;
  }
);

export const addSubWarehouse = createAsyncThunk(
  "subWarehouse/addSubWarehouse",
  async (data, thunkAPI) => {
    const currentSubWarehouses = await subWarehouseService.addSubWarehouse(
      data
    );
    return currentSubWarehouses;
  }
);

const subWarehouseSlice = createSlice({
  name: "subWarehouse",
  initialState: {
    currentSubWarehouses: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentSubWarehouses = action.payload;
    });

    builder.addCase(getSubWarehouseById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSubWarehouseById.fulfilled, (state, action) => {
      state.loading = false;
      state.currentSubWarehouses = action.payload;
    });

    builder.addCase(addSubWarehouse.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addSubWarehouse.fulfilled, (state, action) => {
      state.loading = false;
      state.currentSubWarehouses = action.payload;
    });
  },
});

const { reducer: subWarehouseReducer } = subWarehouseSlice;

export default subWarehouseReducer;
