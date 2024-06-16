import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as productService from "~/services/subWarehouseDetail/productService";

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async (params, thunkAPI) => {
    const currentProducts = await productService.getAllProducts();
    return currentProducts;
  }
);

export const getAllGifts = createAsyncThunk(
  "product/getAllGifts",
  async (params, thunkAPI) => {
    const currentProducts = await productService.getAllGifts();
    return currentProducts;
  }
);

export const getTotalProducts = createAsyncThunk(
  "product/getTotalProducts",
  async (params, thunkAPI) => {
    const currentProducts = await productService.getTotalProducts();
    return currentProducts;
  }
);

export const getTotalGifts = createAsyncThunk(
  "product/getTotalGifts",
  async (params, thunkAPI) => {
    const currentProducts = await productService.getTotalGifts();
    return currentProducts;
  }
);

export const getTotalNewProducts = createAsyncThunk(
  "product/getTotalNewProducts",
  async (params, thunkAPI) => {
    const currentProducts = await productService.getTotalNewProducts();
    return currentProducts;
  }
);
export const getTotalNewGifts = createAsyncThunk(
  "product/getTotalNewGifts",
  async (params, thunkAPI) => {
    const currentProducts = await productService.getTotalNewGifts();
    return currentProducts;
  }
);

export const getMostImportedProducts = createAsyncThunk(
  "product/getMostImportedProducts",
  async (params, thunkAPI) => {
    const currentProducts = await productService.getMostImportedProducts();
    return currentProducts;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    currentProducts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.currentProducts = action.payload;
    });

    builder.addCase(getAllGifts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllGifts.fulfilled, (state, action) => {
      state.loading = false;
      state.currentProducts = action.payload;
    });

    builder.addCase(getTotalProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.currentProducts = action.payload;
    });

    builder.addCase(getTotalGifts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalGifts.fulfilled, (state, action) => {
      state.loading = false;
      state.currentProducts = action.payload;
    });

    builder.addCase(getTotalNewProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalNewProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.currentProducts = action.payload;
    });

    builder.addCase(getTotalNewGifts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalNewGifts.fulfilled, (state, action) => {
      state.loading = false;
      state.currentProducts = action.payload;
    });

    builder.addCase(getMostImportedProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMostImportedProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.currentProducts = action.payload;
    });
  },
});

const { reducer: productSubWarehouseReducer } = productSlice;

export default productSubWarehouseReducer;
