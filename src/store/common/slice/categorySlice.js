import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as categoryService from "~/services/common/categoryService";

export const getAll = createAsyncThunk(
  "category/getAll",
  async (params, thunkAPI) => {
    const currentCategory = await categoryService.getAll();
    return currentCategory;
  }
);

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (data, thunkAPI) => {
    const currentCategory = await categoryService.addCategory(data);
    return currentCategory;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    currentCategories: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentCategories = action.payload;
    });

    builder.addCase(addCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.currentCategories = action.payload;
    });
  },
});

const { reducer: categoryReducer } = categorySlice;

export default categoryReducer;
