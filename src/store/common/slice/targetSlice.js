import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as targetService from "~/services/common/targetService";

export const getAll = createAsyncThunk(
  "target/getAll",
  async (params, thunkAPI) => {
    const currentTargets = await targetService.getAll();
    return currentTargets;
  }
);

export const addTarget = createAsyncThunk(
  "target/addTarget",
  async (data, thunkAPI) => {
    const currentTargets = await targetService.addTarget(data);
    return currentTargets;
  }
);

const targetSlice = createSlice({
  name: "target",
  initialState: {
    currentTargets: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentTargets = action.payload;
    });

    builder.addCase(addTarget.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTarget.fulfilled, (state, action) => {
      state.loading = false;
      state.currentTargets = action.payload;
    });
  },
});

const { reducer: targetReducer } = targetSlice;

export default targetReducer;
