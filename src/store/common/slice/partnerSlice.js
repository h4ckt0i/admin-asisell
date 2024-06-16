import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as partnerService from "~/services/common/partnerService";

export const getAll = createAsyncThunk(
  "partner/getAll",
  async (params, thunkAPI) => {
    const currentPartners = await partnerService.getAll();
    return currentPartners;
  }
);

export const getTotalPartners = createAsyncThunk(
  "partner/getTotalPartners",
  async (params, thunkAPI) => {
    const currentPartners = await partnerService.getTotalPartners();
    return currentPartners;
  }
);

export const addPartner = createAsyncThunk(
  "partner/addPartner",
  async (data, thunkAPI) => {
    const currentPartners = await partnerService.addPartner(data);
    return currentPartners;
  }
);

const partnerSlice = createSlice({
  name: "partner",
  initialState: {
    currentPartners: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentPartners = action.payload;
    });

    builder.addCase(getTotalPartners.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalPartners.fulfilled, (state, action) => {
      state.loading = false;
      state.currentPartners = action.payload;
    });

    builder.addCase(addPartner.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addPartner.fulfilled, (state, action) => {
      state.loading = false;
      state.currentPartners = action.payload;
    });
  },
});

const { reducer: partnerReducer } = partnerSlice;

export default partnerReducer;
