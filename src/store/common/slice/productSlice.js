import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as productService from "~/services/common/productService";

export const getAll = createAsyncThunk(
  "product/getAll",
  async (params, thunkAPI) => {
    const currentProducts = await productService.getAll();
    return currentProducts;
  }
);

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

export const getAllProductsOfWholeWarehouses = createAsyncThunk(
  "product/getAllProductsOfWholeWarehouses",
  async (params, thunkAPI) => {
    const currentProducts =
      await productService.getAllProductsOfWholeWarehouses();
    return currentProducts;
  }
);

export const getAllGiftsOfWholeWarehouses = createAsyncThunk(
  "product/getAllGiftsOfWholeWarehouses",
  async (params, thunkAPI) => {
    const currentProducts = await productService.getAllGiftsOfWholeWarehouses();
    return currentProducts;
  }
);

export const getMostSoldProducts = createAsyncThunk(
  "product/getMostSoldProducts",
  async (params, thunkAPI) => {
    const currentProducts = await productService.getMostSoldProducts();
    return currentProducts;
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (data, thunkAPI) => {
    const currentProducts = await productService.addProduct(data);
    return currentProducts;
  }
);

export const getTotalSoldToday = createAsyncThunk(
  "product/getTotalSoldToday",
  async (params, thunkAPI) => {
    const currentProducts = await productService.getTotalSoldToday();
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

export const editProductById = createAsyncThunk(
  "product/editProductById",
  async (data, thunkAPI) => {
    const currentProducts = await productService.editProductById(data);
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
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentProducts = action.payload;
    });

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

    builder.addCase(getAllProductsOfWholeWarehouses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAllProductsOfWholeWarehouses.fulfilled,
      (state, action) => {
        state.loading = false;
        state.currentProducts = action.payload;
      }
    );

    builder.addCase(getAllGiftsOfWholeWarehouses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllGiftsOfWholeWarehouses.fulfilled, (state, action) => {
      state.loading = false;
      state.currentProducts = action.payload;
    });

    builder.addCase(getMostSoldProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMostSoldProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.currentProducts = action.payload;
    });

    builder.addCase(getTotalSoldToday.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalSoldToday.fulfilled, (state, action) => {
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

    builder.addCase(addProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.currentProducts = action.payload;
    });

    builder.addCase(editProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.currentProducts = action.payload;
    });
  },
});

const { reducer: productReducer } = productSlice;

export default productReducer;
