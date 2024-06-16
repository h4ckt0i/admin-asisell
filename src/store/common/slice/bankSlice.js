import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as bankService from "~/services/common/bankService";

export const getAll = createAsyncThunk(
  "bank/getAll",
  async (params, thunkAPI) => {
    const currentBanks = await bankService.getAll();
    return currentBanks;
  }
);

const bankSlice = createSlice({
  name: "bank",
  initialState: {
    currentBanks: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentBanks = action.payload;
    });
  },
});

const { reducer: bankReducer } = bankSlice;

export default bankReducer;
