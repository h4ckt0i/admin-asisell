import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as expenseService from "~/services/common/expenseService";

export const getAll = createAsyncThunk(
  "expense/getAll",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getAll();
    return currentExpenses;
  }
);

export const getAllFixedCost = createAsyncThunk(
  "expense/getAllFixedCost",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getAllFixedCost();
    return currentExpenses;
  }
);

export const getAllMobileCost = createAsyncThunk(
  "expense/getAllMobileCost",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getAllMobileCost();
    return currentExpenses;
  }
);

export const getAllTotal = createAsyncThunk(
  "expense/getAllTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getAllTotal();
    return currentExpenses;
  }
);

export const getUnpaidTotal = createAsyncThunk(
  "expense/getUnpaidTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getUnpaidTotal();
    return currentExpenses;
  }
);

export const getPaidTotal = createAsyncThunk(
  "expense/getPaidTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getPaidTotal();
    return currentExpenses;
  }
);

export const getAllFixedCostTotal = createAsyncThunk(
  "expense/getAllFixedCostTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getAllFixedCostTotal();
    return currentExpenses;
  }
);

export const getUnpaidFixedCostTotal = createAsyncThunk(
  "expense/getUnpaidFixedCostTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getUnpaidFixedCostTotal();
    return currentExpenses;
  }
);

export const getPaidFixedCostTotal = createAsyncThunk(
  "expense/getPaidFixedCostTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getPaidFixedCostTotal();
    return currentExpenses;
  }
);

export const getAllMobileCostTotal = createAsyncThunk(
  "expense/getAllMobileCostTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getAllMobileCostTotal();
    return currentExpenses;
  }
);

export const getUnpaidMobileCostTotal = createAsyncThunk(
  "expense/getUnpaidMobileCostTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getUnpaidMobileCostTotal();
    return currentExpenses;
  }
);

export const getPaidMobileCostTotal = createAsyncThunk(
  "expense/getPaidMobileCostTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getPaidMobileCostTotal();
    return currentExpenses;
  }
);

export const getAllMonthlyTotal = createAsyncThunk(
  "expense/getAllMonthlyTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getAllMonthlyTotal();
    return currentExpenses;
  }
);

export const getUnpaidMonthlyTotal = createAsyncThunk(
  "expense/getUnpaidMonthlyTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getUnpaidMonthlyTotal();
    return currentExpenses;
  }
);

export const getPaidMonthlyTotal = createAsyncThunk(
  "expense/getPaidMonthlyTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getPaidMonthlyTotal();
    return currentExpenses;
  }
);

export const getAllMonthlyFixedCostTotal = createAsyncThunk(
  "expense/getAllMonthlyFixedCostTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getAllMonthlyFixedCostTotal();
    return currentExpenses;
  }
);

export const getUnpaidMonthlyFixedCostTotal = createAsyncThunk(
  "expense/getUnpaidMonthlyFixedCostTotal",
  async (params, thunkAPI) => {
    const currentExpenses =
      await expenseService.getUnpaidMonthlyFixedCostTotal();
    return currentExpenses;
  }
);

export const getPaidMonthlyFixedCostTotal = createAsyncThunk(
  "expense/getPaidMonthlyFixedCostTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getPaidMonthlyFixedCostTotal();
    return currentExpenses;
  }
);

export const getAllMonthlyMobileCostTotal = createAsyncThunk(
  "expense/getAllMonthlyMobileCostTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getAllMonthlyMobileCostTotal();
    return currentExpenses;
  }
);

export const getUnpaidMonthlyMobileCostTotal = createAsyncThunk(
  "expense/getUnpaidMonthlyMobileCostTotal",
  async (params, thunkAPI) => {
    const currentExpenses =
      await expenseService.getUnpaidMonthlyMobileCostTotal();
    return currentExpenses;
  }
);

export const getPaidMonthlyMobileCostTotal = createAsyncThunk(
  "expense/getPaidMonthlyMobileCostTotal",
  async (params, thunkAPI) => {
    const currentExpenses =
      await expenseService.getPaidMonthlyMobileCostTotal();
    return currentExpenses;
  }
);

export const getYearlyTotal = createAsyncThunk(
  "expense/getYearlyTotal",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getYearlyTotal(params);
    return currentExpenses;
  }
);

export const getMostExpensiveFixedCost = createAsyncThunk(
  "expense/getMostExpensiveFixedCost",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getMostExpensiveFixedCost();
    return currentExpenses;
  }
);

export const getMostExpensiveMobileCost = createAsyncThunk(
  "expense/getMostExpensiveMobileCost",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.getMostExpensiveMobileCost();
    return currentExpenses;
  }
);

export const addExpense = createAsyncThunk(
  "expense/addExpense",
  async (data, thunkAPI) => {
    const currentExpenses = await expenseService.addExpense(data);
    return currentExpenses;
  }
);

export const deleteExpense = createAsyncThunk(
  "expense/deleteExpense",
  async (params, thunkAPI) => {
    const currentExpenses = await expenseService.deleteExpense(params);
    return currentExpenses;
  }
);

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    currentExpenses: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getAllFixedCost.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllFixedCost.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });
    builder.addCase(getAllMobileCost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllMobileCost.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getAllTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getUnpaidTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUnpaidTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getPaidTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPaidTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getAllFixedCostTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllFixedCostTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getUnpaidFixedCostTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUnpaidFixedCostTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getPaidFixedCostTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPaidFixedCostTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getAllMobileCostTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllMobileCostTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getUnpaidMobileCostTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUnpaidMobileCostTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getPaidMobileCostTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPaidMobileCostTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getAllMonthlyTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllMonthlyTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getUnpaidMonthlyTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUnpaidMonthlyTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getPaidMonthlyTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPaidMonthlyTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getAllMonthlyFixedCostTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllMonthlyFixedCostTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getUnpaidMonthlyFixedCostTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getUnpaidMonthlyFixedCostTotal.fulfilled,
      (state, action) => {
        state.loading = false;
        state.currentExpenses = action.payload;
      }
    );

    builder.addCase(getPaidMonthlyFixedCostTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPaidMonthlyFixedCostTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getAllMonthlyMobileCostTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllMonthlyMobileCostTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getUnpaidMonthlyMobileCostTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getUnpaidMonthlyMobileCostTotal.fulfilled,
      (state, action) => {
        state.loading = false;
        state.currentExpenses = action.payload;
      }
    );

    builder.addCase(getPaidMonthlyMobileCostTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getPaidMonthlyMobileCostTotal.fulfilled,
      (state, action) => {
        state.loading = false;
        state.currentExpenses = action.payload;
      }
    );

    builder.addCase(getYearlyTotal.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getYearlyTotal.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getMostExpensiveFixedCost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMostExpensiveFixedCost.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(getMostExpensiveMobileCost.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMostExpensiveMobileCost.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(addExpense.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addExpense.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });

    builder.addCase(deleteExpense.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteExpense.fulfilled, (state, action) => {
      state.loading = false;
      state.currentExpenses = action.payload;
    });
  },
});

const { reducer: expenseReducer } = expenseSlice;

export default expenseReducer;
