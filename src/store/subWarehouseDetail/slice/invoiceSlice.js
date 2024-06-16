import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as invoiceService from "~/services/subWarehouseDetail/invoiceService";

export const getTotalExportedInvoices = createAsyncThunk(
  "invoice/getTotalExportedInvoices",
  async (params, thunkAPI) => {
    const currentInvoices = await invoiceService.getTotalExportedInvoices(
      params
    );
    return currentInvoices;
  }
);

export const getTotalExportedInvoicesByRetail = createAsyncThunk(
  "invoice/getTotalExportedInvoicesByRetail",
  async (params, thunkAPI) => {
    const currentInvoices =
      await invoiceService.getTotalExportedInvoicesByRetail(params);
    return currentInvoices;
  }
);

export const getTotalExportedInvoicesByWholesale = createAsyncThunk(
  "invoice/getTotalExportedInvoicesByWholesale",
  async (params, thunkAPI) => {
    const currentInvoices =
      await invoiceService.getTotalExportedInvoicesByWholesale(params);
    return currentInvoices;
  }
);

export const getTotalExportedAndImportedInvoicesByYear = createAsyncThunk(
  "invoice/getTotalExportedAndImportedInvoicesByYear",
  async (params, thunkAPI) => {
    const currentInvoices =
      await invoiceService.getTotalExportedAndImportedInvoicesByYear(params);
    return currentInvoices;
  }
);

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    currentInvoices: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTotalExportedInvoices.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalExportedInvoices.fulfilled, (state, action) => {
      state.loading = false;
      state.currentInvoices = action.payload;
    });

    builder.addCase(getTotalExportedInvoicesByRetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getTotalExportedInvoicesByRetail.fulfilled,
      (state, action) => {
        state.loading = false;
        state.currentInvoices = action.payload;
      }
    );

    builder.addCase(getTotalExportedInvoicesByWholesale.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getTotalExportedInvoicesByWholesale.fulfilled,
      (state, action) => {
        state.loading = false;
        state.currentInvoices = action.payload;
      }
    );

    builder.addCase(
      getTotalExportedAndImportedInvoicesByYear.pending,
      (state) => {
        state.loading = true;
      }
    );
    builder.addCase(
      getTotalExportedAndImportedInvoicesByYear.fulfilled,
      (state, action) => {
        state.loading = false;
        state.currentInvoices = action.payload;
      }
    );
  },
});

const { reducer: invoiceSubWarehouseReducer } = invoiceSlice;

export default invoiceSubWarehouseReducer;
