import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as messageService from "~/services/common/messageService";

export const getAll = createAsyncThunk(
  "message/getAll",
  async (params, thunkAPI) => {
    const currentMessages = await messageService.getAll();
    return currentMessages;
  }
);

export const getNotCheckedMessages = createAsyncThunk(
  "message/getNotCheckedMessages",
  async (params, thunkAPI) => {
    const currentMessages = await messageService.getNotCheckedMessages();
    return currentMessages;
  }
);

export const editMessage = createAsyncThunk(
  "message/editMessage",
  async (data, thunkAPI) => {
    const currentMessages = await messageService.editMessage(data);
    return currentMessages;
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState: {
    currentMessages: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentMessages = action.payload;
    });

    builder.addCase(getNotCheckedMessages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNotCheckedMessages.fulfilled, (state, action) => {
      state.loading = false;
      state.currentMessages = action.payload;
    });

    builder.addCase(editMessage.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editMessage.fulfilled, (state, action) => {
      state.loading = false;
      state.currentMessages = action.payload;
    });
  },
});

const { reducer: messageReducer } = messageSlice;

export default messageReducer;
