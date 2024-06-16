import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as subCategoryService from "~/services/common/subCategoryService";

export const getAll = createAsyncThunk(
  "subCategory/getAll",
  async (params, thunkAPI) => {
    const currentSubCategories = await subCategoryService.getAll();
    return currentSubCategories;
  }
);
export const getAllByCategory = createAsyncThunk(
  "subCategory/getAllByCategory",
  async (params, thunkAPI) => {
    const currentSubCategories = await subCategoryService.getAllByCategory(
      params
    );
    return currentSubCategories;
  }
);

export const addSubCategory = createAsyncThunk(
  "subCategory/addSubCategory",
  async (data, thunkAPI) => {
    const currentSubCategories = await subCategoryService.addSubCategory(data);
    return currentSubCategories;
  }
);

const subCategorySlice = createSlice({
  name: "subCategory",
  initialState: {
    currentSubCategories: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentSubCategories = action.payload;
    });

    builder.addCase(getAllByCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllByCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.currentSubCategories = action.payload;
    });

    builder.addCase(addSubCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addSubCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.currentSubCategories = action.payload;
    });
  },
});

const { reducer: subCategoryReducer } = subCategorySlice;

export default subCategoryReducer;
