import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as cooperativeSourceService from "~/services/common/cooperativeSourceService";

export const getAll = createAsyncThunk(
  "cooperativeSource/getAll",
  async (params, thunkAPI) => {
    const currentCooperativeSources = await cooperativeSourceService.getAll();
    return currentCooperativeSources;
  }
);

export const getNotCheckedCooperativeSources = createAsyncThunk(
  "cooperativeSource/getNotCheckedCooperativeSources",
  async (params, thunkAPI) => {
    const currentCooperativeSources =
      await cooperativeSourceService.getNotCheckedCooperativeSources();
    return currentCooperativeSources;
  }
);

export const editCooperativeSources = createAsyncThunk(
  "cooperativeSource/editCooperativeSources",
  async (data, thunkAPI) => {
    const currentCooperativeSources =
      await cooperativeSourceService.editCooperativeSources(data);
    return currentCooperativeSources;
  }
);

const cooperativeSourceSlice = createSlice({
  name: "cooperativeSource",
  initialState: {
    currentCooperativeSources: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentCooperativeSources = action.payload;
    });

    builder.addCase(getNotCheckedCooperativeSources.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getNotCheckedCooperativeSources.fulfilled,
      (state, action) => {
        state.loading = false;
        state.currentCooperativeSources = action.payload;
      }
    );

    builder.addCase(editCooperativeSources.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editCooperativeSources.fulfilled, (state, action) => {
      state.loading = false;
      state.currentCooperativeSources = action.payload;
    });
  },
});

const { reducer: cooperativeSourceReducer } = cooperativeSourceSlice;

export default cooperativeSourceReducer;
