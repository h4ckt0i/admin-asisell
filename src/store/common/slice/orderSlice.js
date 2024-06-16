import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as orderService from "~/services/common/orderService";

export const getAll = createAsyncThunk(
  "order/getAll",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getAll();
    return currentOrders;
  }
);

export const getOrderById = createAsyncThunk(
  "order/getOrderById",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getOrderById(params);
    return currentOrders;
  }
);

export const getAllBySuccess = createAsyncThunk(
  "order/getAllBySuccess",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getAllBySuccess();
    return currentOrders;
  }
);

export const getTotalOrders = createAsyncThunk(
  "order/getTotalOrders",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getTotalOrders();
    return currentOrders;
  }
);

export const getAllPending = createAsyncThunk(
  "order/getAllPending",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getAllPending();
    return currentOrders;
  }
);

export const getRevenue = createAsyncThunk(
  "order/getRevenue",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getRevenue();
    return currentOrders;
  }
);

export const getRevenueByYear = createAsyncThunk(
  "order/getRevenueByYear",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getRevenueByYear(params);
    return currentOrders;
  }
);

export const getRevenueByMonthAndYear = createAsyncThunk(
  "order/getRevenueByMonthAndYear",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getRevenueByMonthAndYear(params);
    return currentOrders;
  }
);

export const getTotalByMonthAndYear = createAsyncThunk(
  "order/getTotalByMonthAndYear",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getTotalByMonthAndYear(params);
    return currentOrders;
  }
);

export const editOrder = createAsyncThunk(
  "order/editOrder",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.editOrder(params);
    return currentOrders;
  }
);

export const getPendingOrders = createAsyncThunk(
  "order/getPendingOrders",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getPendingOrders();
    return currentOrders;
  }
);

export const getPaidOrders = createAsyncThunk(
  "order/getPaidOrders",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getPaidOrders();
    return currentOrders;
  }
);

export const getShippingOrders = createAsyncThunk(
  "order/getShippingOrders",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getShippingOrders();
    return currentOrders;
  }
);

export const getPendingDelivery = createAsyncThunk(
  "order/getPendingDelivery",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getPendingDelivery();
    return currentOrders;
  }
);

export const getDeliveredOrders = createAsyncThunk(
  "order/getDeliveredOrders",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getDeliveredOrders();
    return currentOrders;
  }
);

export const getCanceledOrders = createAsyncThunk(
  "order/getCanceledOrders",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getCanceledOrders();
    return currentOrders;
  }
);

export const getTotalOrdersToday = createAsyncThunk(
  "order/getTotalOrdersToday",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getTotalOrdersToday();
    return currentOrders;
  }
);

export const getRevenueToday = createAsyncThunk(
  "order/getRevenueToday",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getRevenueToday();
    return currentOrders;
  }
);

export const getMonthlyShippingCost = createAsyncThunk(
  "order/getMonthlyShippingCost",
  async (params, thunkAPI) => {
    const currentOrders = await orderService.getMonthlyShippingCost();
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

    builder.addCase(getOrderById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOrderById.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrders = action.payload;
    });

    builder.addCase(getAllBySuccess.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllBySuccess.fulfilled, (state, action) => {
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

    builder.addCase(getAllPending.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllPending.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrders = action.payload;
    });

    builder.addCase(getTotalOrdersToday.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalOrdersToday.fulfilled, (state, action) => {
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

    builder.addCase(getRevenue.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRevenue.fulfilled, (state, action) => {
      state.loading = false;
      state.revenue = action.payload;
    });

    builder.addCase(getRevenueToday.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRevenueToday.fulfilled, (state, action) => {
      state.loading = false;
      state.revenue = action.payload;
    });

    builder.addCase(getRevenueByYear.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRevenueByYear.fulfilled, (state, action) => {
      state.loading = false;
      state.revenue = action.payload;
    });

    builder.addCase(getRevenueByMonthAndYear.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRevenueByMonthAndYear.fulfilled, (state, action) => {
      state.loading = false;
      state.revenue = action.payload;
    });

    builder.addCase(getTotalByMonthAndYear.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalByMonthAndYear.fulfilled, (state, action) => {
      state.loading = false;
      state.revenue = action.payload;
    });

    builder.addCase(editOrder.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editOrder.fulfilled, (state, action) => {
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

const { reducer: orderReducer } = orderSlice;

export default orderReducer;
