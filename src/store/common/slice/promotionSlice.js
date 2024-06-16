import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as promotionService from "~/services/common/promotionService";

export const getAll = createAsyncThunk(
  "promotion/getAll",
  async (params, thunkAPI) => {
    const currentPromotions = await promotionService.getAll();
    return currentPromotions;
  }
);

export const getPromotionById = createAsyncThunk(
  "promotion/getPromotionById",
  async (params, thunkAPI) => {
    const currentPromotions = await promotionService.getPromotionById(params);
    return currentPromotions;
  }
);
export const getTotalRevenue = createAsyncThunk(
  "promotion/getTotalRevenue",
  async (params, thunkAPI) => {
    const currentPromotions = await promotionService.getTotalRevenue();
    return currentPromotions;
  }
);

export const getTotalProfit = createAsyncThunk(
  "promotion/getTotalProfit",
  async (params, thunkAPI) => {
    const currentPromotions = await promotionService.getTotalProfit();
    return currentPromotions;
  }
);

export const getTotalProducts = createAsyncThunk(
  "promotion/getTotalProducts",
  async (params, thunkAPI) => {
    const currentPromotions = await promotionService.getTotalProducts();
    return currentPromotions;
  }
);

export const getMostEffectivePromotion = createAsyncThunk(
  "promotion/getMostEffectivePromotion",
  async (params, thunkAPI) => {
    const currentPromotions =
      await promotionService.getMostEffectivePromotion();
    return currentPromotions;
  }
);

export const addPromotion = createAsyncThunk(
  "promotion/addPromotion",
  async (data, thunkAPI) => {
    const currentPromotions = await promotionService.addPromotion(data);
    return currentPromotions;
  }
);

export const editPromotion = createAsyncThunk(
  "promotion/editPromotion",
  async (data, thunkAPI) => {
    const currentPromotions = await promotionService.editPromotion(data);
    return currentPromotions;
  }
);

const promotionSlice = createSlice({
  name: "promotion",
  initialState: {
    currentPromotions: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentPromotions = action.payload;
    });

    builder.addCase(getPromotionById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPromotionById.fulfilled, (state, action) => {
      state.loading = false;
      state.currentPromotions = action.payload;
    });

    builder.addCase(getTotalRevenue.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalRevenue.fulfilled, (state, action) => {
      state.loading = false;
      state.currentPromotions = action.payload;
    });

    builder.addCase(getTotalProfit.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalProfit.fulfilled, (state, action) => {
      state.loading = false;
      state.currentPromotions = action.payload;
    });

    builder.addCase(getTotalProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.currentPromotions = action.payload;
    });

    builder.addCase(getMostEffectivePromotion.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMostEffectivePromotion.fulfilled, (state, action) => {
      state.loading = false;
      state.currentPromotions = action.payload;
    });

    builder.addCase(addPromotion.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addPromotion.fulfilled, (state, action) => {
      state.loading = false;
      state.currentPromotions = action.payload;
    });

    builder.addCase(editPromotion.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editPromotion.fulfilled, (state, action) => {
      state.loading = false;
      state.currentPromotions = action.payload;
    });
  },
});

const { reducer: promotionReducer } = promotionSlice;

export default promotionReducer;
