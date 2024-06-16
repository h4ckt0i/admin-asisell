import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as orderService from "~/services/subWarehouseDetail/orderService";

export const getAll = createAsyncThunk(
  "order/getAll",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getAll(params);
    return currentOrders;
  }
);

export const getTotalOrders = createAsyncThunk(
  "order/getTotalOrders",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getTotalOrders(params);
    return currentOrders;
  }
);

export const getPendingOrders = createAsyncThunk(
  "order/getPendingOrders",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getPendingOrders(params);
    return currentOrders;
  }
);

export const getPaidOrders = createAsyncThunk(
  "order/getPaidOrders",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getPaidOrders(params);
    return currentOrders;
  }
);

export const getShippingOrders = createAsyncThunk(
  "order/getShippingOrders",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getShippingOrders(params);
    return currentOrders;
  }
);

export const getPendingDelivery = createAsyncThunk(
  "order/getPendingDelivery",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getPendingDelivery(params);
    return currentOrders;
  }
);

export const getDeliveredOrders = createAsyncThunk(
  "order/getDeliveredOrders",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getDeliveredOrders(params);
    return currentOrders;
  }
);

export const getCanceledOrders = createAsyncThunk(
  "order/getCanceledOrders",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getCanceledOrders(params);
    return currentOrders;
  }
);

export const getMonthlyShippingCost = createAsyncThunk(
  "order/getMonthlyShippingCost",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getMonthlyShippingCost(params);
    return currentOrders;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    currentOrders: [],
    revenue: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrders = action.payload;
    });

    builder.addCase(getTotalOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrders = action.payload;
    });

    builder.addCase(getPaidOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPaidOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrders = action.payload;
    });

    builder.addCase(getPendingOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPendingOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrders = action.payload;
    });

    builder.addCase(getShippingOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getShippingOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrders = action.payload;
    });

    builder.addCase(getPendingDelivery.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPendingDelivery.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrders = action.payload;
    });

    builder.addCase(getDeliveredOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDeliveredOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrders = action.payload;
    });

    builder.addCase(getCanceledOrders.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCanceledOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrders = action.payload;
    });

    builder.addCase(getMonthlyShippingCost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMonthlyShippingCost.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrders = action.payload;
    });
  },
});

const { reducer: orderSubWarehouseReducer } = orderSlice;

export default orderSubWarehouseReducer;
