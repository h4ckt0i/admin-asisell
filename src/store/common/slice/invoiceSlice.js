import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as invoiceService from "~/services/common/invoiceService";

export const getAll = createAsyncThunk(
  "invoice/getAll",
  async (params, thunkAPI) => {
    const currentInvoices = await invoiceService.getAll();
    return currentInvoices;
  }
);

export const getInvoiceById = createAsyncThunk(
  "invoice/getInvoiceById",
  async (params, thunkAPI) => {
    const currentInvoices = await invoiceService.getInvoiceById(params);
    return currentInvoices;
  }
);

export const getImportedInvoices = createAsyncThunk(
  "invoice/getImportedInvoices",
  async (params, thunkAPI) => {
    const currentInvoices = await invoiceService.getImportedInvoices();
    return currentInvoices;
  }
);

export const getExportedInvoices = createAsyncThunk(
  "invoice/getExportedInvoices",
  async (params, thunkAPI) => {
    const currentInvoices = await invoiceService.getExportedInvoices();
    return currentInvoices;
  }
);

export const getTotalImportedInvoices = createAsyncThunk(
  "invoice/getTotalImportedInvoices",
  async (params, thunkAPI) => {
    const currentInvoices = await invoiceService.getTotalImportedInvoices();
    return currentInvoices;
  }
);

export const getTotalExportedInvoices = createAsyncThunk(
  "invoice/getTotalExportedInvoices",
  async (params, thunkAPI) => {
    const currentInvoices = await invoiceService.getTotalExportedInvoices();
    return currentInvoices;
  }
);

export const getTotalExportedInvoicesByRetail = createAsyncThunk(
  "invoice/getTotalExportedInvoicesByRetail",
  async (params, thunkAPI) => {
    const currentInvoices =
      await invoiceService.getTotalExportedInvoicesByRetail();
    return currentInvoices;
  }
);

export const getTotalExportedInvoicesByWholesale = createAsyncThunk(
  "invoice/getTotalExportedInvoicesByWholesale",
  async (params, thunkAPI) => {
    const currentInvoices =
      await invoiceService.getTotalExportedInvoicesByWholesale();
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

export const getTotalExportedInvoicesByYear = createAsyncThunk(
  "invoice/getTotalExportedInvoicesByYear",
  async (params, thunkAPI) => {
    const currentInvoices = await invoiceService.getTotalExportedInvoicesByYear(
      params
    );
    return currentInvoices;
  }
);

export const addImportedInvoice = createAsyncThunk(
  "invoice/addImportedInvoice",
  async (data, thunkAPI) => {
    const currentInvoices = await invoiceService.addImportedInvoice(data);
    return currentInvoices;
  }
);

export const addExportedInvoice = createAsyncThunk(
  "invoice/addExportedInvoice",
  async (data, thunkAPI) => {
    const currentInvoices = await invoiceService.addExportedInvoice(data);
    return currentInvoices;
  }
);

export const addExportedSubWarehouseInvoice = createAsyncThunk(
  "invoice/addExportedSubWarehouseInvoice",
  async (data, thunkAPI) => {
    const currentInvoices = await invoiceService.addExportedSubWarehouseInvoice(
      data
    );
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
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentInvoices = action.payload;
    });

    builder.addCase(getInvoiceById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getInvoiceById.fulfilled, (state, action) => {
      state.loading = false;
      state.currentInvoices = action.payload;
    });

    builder.addCase(getImportedInvoices.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getImportedInvoices.fulfilled, (state, action) => {
      state.loading = false;
      state.currentInvoices = action.payload;
    });

    builder.addCase(getExportedInvoices.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getExportedInvoices.fulfilled, (state, action) => {
      state.loading = false;
      state.currentInvoices = action.payload;
    });

    builder.addCase(getTotalImportedInvoices.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalImportedInvoices.fulfilled, (state, action) => {
      state.loading = false;
      state.currentInvoices = action.payload;
    });

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

    builder.addCase(getTotalExportedInvoicesByYear.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getTotalExportedInvoicesByYear.fulfilled,
      (state, action) => {
        state.loading = false;
        state.currentInvoices = action.payload;
      }
    );

    builder.addCase(addImportedInvoice.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addImportedInvoice.fulfilled, (state, action) => {
      state.loading = false;
      state.currentInvoices = action.payload;
    });

    builder.addCase(addExportedInvoice.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addExportedInvoice.fulfilled, (state, action) => {
      state.loading = false;
      state.currentInvoices = action.payload;
    });

    builder.addCase(addExportedSubWarehouseInvoice.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      addExportedSubWarehouseInvoice.fulfilled,
      (state, action) => {
        state.loading = false;
        state.currentInvoices = action.payload;
      }
    );
  },
});

const { reducer: invoiceReducer } = invoiceSlice;

export default invoiceReducer;
