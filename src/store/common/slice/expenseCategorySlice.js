import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as expenseCategoryService from "~/services/common/expenseCategoryService";

export const getAll = createAsyncThunk(
  "expenseCategory/getAll",
  async (params, thunkAPI) => {
    const currentExpenseCategories = await expenseCategoryService.getAll();
    return currentExpenseCategories;
  }
);

export const addExpenseCategory = createAsyncThunk(
  "expenseCategory/addExpenseCategory",
  async (data, thunkAPI) => {
    const currentExpenseCategories =
      await expenseCategoryService.addExpenseCategory(data);
    return currentExpenseCategories;
  }
);

const expenseCategorySlice = createSlice({
  name: "expenseCategory",
  initialState: {
    currentExpenseCategories: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenseCategories = action.payload;
    });

    builder.addCase(addExpenseCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addExpenseCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenseCategories = action.payload;
    });
  },
});

const { reducer: expenseCategoryReducer } = expenseCategorySlice;

export default expenseCategoryReducer;
