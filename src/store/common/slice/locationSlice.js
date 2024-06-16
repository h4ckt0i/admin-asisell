import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as locationService from "~/services/common/locationService";

export const getAllCities = createAsyncThunk(
  "location/getAllCities",
  async (params, thunkAPI) => {
    const currentLocations = await locationService.getAllCities();
    return currentLocations;
  }
);

export const getDistrictsByCity = createAsyncThunk(
  "location/getDistrictsByCity",
  async (params, thunkAPI) => {
    const currentLocations = await locationService.getDistrictsByCity(params);
    return currentLocations;
  }
);
export const getWardsByDistrict = createAsyncThunk(
  "location/getWardsByDistrict",
  async (params, thunkAPI) => {
    const currentLocations = await locationService.getWardsByDistrict(params);
    return currentLocations;
  }
);

const locationSlice = createSlice({
  name: "location",
  initialState: {
    currentLocations: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCities.fulfilled, (state, action) => {
      state.currentLocations = action.payload;
    });

    builder.addCase(getDistrictsByCity.fulfilled, (state, action) => {
      state.currentLocations = action.payload;
    });

    builder.addCase(getWardsByDistrict.fulfilled, (state, action) => {
      state.currentLocations = action.payload;
    });
  },
});

const { reducer: locationReducer } = locationSlice;

export default locationReducer;
