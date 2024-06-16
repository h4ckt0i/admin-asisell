import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as certificateService from "~/services/common/certificateService";

export const getAll = createAsyncThunk(
  "certificate/getAll",
  async (params, thunkAPI) => {
    const currentCertificates = await certificateService.getAll();
    return currentCertificates;
  }
);

export const addCertificate = createAsyncThunk(
  "brand/addCertificate",
  async (data, thunkAPI) => {
    const currentCertificates = await certificateService.addCertificate(data);
    return currentCertificates;
  }
);

const certificateSlice = createSlice({
  name: "certificate",
  initialState: {
    currentCertificates: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentCertificates = action.payload;
    });

    builder.addCase(addCertificate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCertificate.fulfilled, (state, action) => {
      state.loading = false;
      state.currentCertificates = action.payload;
    });
  },
});

const { reducer: certificateReducer } = certificateSlice;

export default certificateReducer;
