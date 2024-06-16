import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as depreciationService from "~/services/common/depreciationService";

export const getAll = createAsyncThunk(
  "depreciation/getAll",
  async (params, thunkAPI) => {
    const currentDepreciations = await depreciationService.getAll();
    return currentDepreciations;
  }
);

export const getDepreciationById = createAsyncThunk(
  "depreciation/getDepreciationById",
  async (params, thunkAPI) => {
    const currentDepreciations = await depreciationService.getDepreciationById(
      params
    );
    return currentDepreciations;
  }
);

export const getTotalDepreciationCost = createAsyncThunk(
  "depreciation/getTotalDepreciationCost",
  async (params, thunkAPI) => {
    const currentDepreciations =
      await depreciationService.getTotalDepreciationCost();
    return currentDepreciations;
  }
);

export const getTotalMonthlyDepreciationCost = createAsyncThunk(
  "depreciation/getTotalMonthlyDepreciationCost",
  async (params, thunkAPI) => {
    const currentDepreciations =
      await depreciationService.getTotalMonthlyDepreciationCost();
    return currentDepreciations;
  }
);

export const getTotalProducts = createAsyncThunk(
  "depreciation/getTotalProducts",
  async (params, thunkAPI) => {
    const currentDepreciations = await depreciationService.getTotalProducts();
    return currentDepreciations;
  }
);

export const getTotalCompletedProducts = createAsyncThunk(
  "depreciation/getTotalCompletedProducts",
  async (params, thunkAPI) => {
    const currentDepreciations =
      await depreciationService.getTotalCompletedProducts();
    return currentDepreciations;
  }
);

export const getMostDepreciations = createAsyncThunk(
  "depreciation/getMostDepreciations",
  async (params, thunkAPI) => {
    const currentDepreciations =
      await depreciationService.getMostDepreciations();
    return currentDepreciations;
  }
);

export const addDepreciation = createAsyncThunk(
  "depreciation/addDepreciation",
  async (data, thunkAPI) => {
    const currentDepreciations = await depreciationService.addDepreciation(
      data
    );
    return currentDepreciations;
  }
);

export const editDepreciation = createAsyncThunk(
  "depreciation/editDepreciation",
  async (data, thunkAPI) => {
    const currentDepreciations = await depreciationService.editDepreciation(
      data
    );
    return currentDepreciations;
  }
);

const depreciationSlice = createSlice({
  name: "depreciation",
  initialState: {
    currentDepreciations: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentDepreciations = action.payload;
    });

    builder.addCase(getDepreciationById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDepreciationById.fulfilled, (state, action) => {
      state.loading = false;
      state.currentDepreciations = action.payload;
    });

    builder.addCase(getTotalDepreciationCost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalDepreciationCost.fulfilled, (state, action) => {
      state.loading = false;
      state.currentDepreciations = action.payload;
    });

    builder.addCase(getTotalMonthlyDepreciationCost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getTotalMonthlyDepreciationCost.fulfilled,
      (state, action) => {
        state.loading = false;
        state.currentDepreciations = action.payload;
      }
    );

    builder.addCase(getTotalProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.currentDepreciations = action.payload;
    });

    builder.addCase(getTotalCompletedProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalCompletedProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.currentDepreciations = action.payload;
    });

    builder.addCase(getMostDepreciations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMostDepreciations.fulfilled, (state, action) => {
      state.loading = false;
      state.currentDepreciations = action.payload;
    });

    builder.addCase(addDepreciation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addDepreciation.fulfilled, (state, action) => {
      state.loading = false;
      state.currentDepreciations = action.payload;
    });

    builder.addCase(editDepreciation.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editDepreciation.fulfilled, (state, action) => {
      state.loading = false;
      state.currentDepreciations = action.payload;
    });
  },
});

const { reducer: depreciationReducer } = depreciationSlice;

export default depreciationReducer;
