import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as userService from "~/services/common/userService";

export const getAllCustomers = createAsyncThunk(
  "user/getAllCustomers",
  async (params, thunkAPI) => {
    const currentUsers = await userService.getAllCustomers();
    return currentUsers;
  }
);

export const getAllCustomersByToday = createAsyncThunk(
  "user/getAllCustomersByToday",
  async (params, thunkAPI) => {
    const currentUsers = await userService.getAllCustomersByToday();
    return currentUsers;
  }
);

export const getAllCustomersByUpcoming = createAsyncThunk(
  "user/getAllCustomersByUpcoming",
  async (params, thunkAPI) => {
    const currentUsers = await userService.getAllCustomersByUpcoming();
    return currentUsers;
  }
);

export const getAllCustomersByLocation = createAsyncThunk(
  "user/getAllCustomersByLocation",
  async (params, thunkAPI) => {
    const currentUsers = await userService.getAllCustomersByLocation();
    return currentUsers;
  }
);

export const getAllNewCustomers = createAsyncThunk(
  "user/getAllNewCustomers",
  async (params, thunkAPI) => {
    const currentUsers = await userService.getAllNewCustomers();
    return currentUsers;
  }
);

export const getNewCustomersToday = createAsyncThunk(
  "user/getNewCustomersToday",
  async (params, thunkAPI) => {
    const currentUsers = await userService.getNewCustomersToday();
    return currentUsers;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUsers: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCustomers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCustomers.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUsers = action.payload;
    });

    builder.addCase(getAllCustomersByToday.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCustomersByToday.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUsers = action.payload;
    });

    builder.addCase(getNewCustomersToday.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNewCustomersToday.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUsers = action.payload;
    });

    builder.addCase(getAllCustomersByUpcoming.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCustomersByUpcoming.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUsers = action.payload;
    });

    builder.addCase(getAllCustomersByLocation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCustomersByLocation.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUsers = action.payload;
    });

    builder.addCase(getAllNewCustomers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllNewCustomers.fulfilled, (state, action) => {
      state.loading = false;
      state.currentUsers = action.payload;
    });
  },
});

const { reducer: userReducer } = userSlice;

export default userReducer;
