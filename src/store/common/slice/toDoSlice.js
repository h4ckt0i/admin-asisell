import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as toDoService from "~/services/common/toDoService";

export const getAll = createAsyncThunk(
  "toDo/getAll",
  async (params, thunkAPI) => {
    const currentToDo = await toDoService.getAll();
    return currentToDo;
  }
);

export const getTotalToDoes = createAsyncThunk(
  "toDo/getTotalToDoes",
  async (params, thunkAPI) => {
    const currentToDo = await toDoService.getTotalToDoes();
    return currentToDo;
  }
);

export const getCompleted = createAsyncThunk(
  "toDo/getCompleted",
  async (params, thunkAPI) => {
    const currentToDo = await toDoService.getCompleted();
    return currentToDo;
  }
);

export const getUnfulfilled = createAsyncThunk(
  "toDo/getUnfulfilled",
  async (params, thunkAPI) => {
    const currentToDo = await toDoService.getUnfulfilled();
    return currentToDo;
  }
);

export const getIncomplete = createAsyncThunk(
  "toDo/getIncomplete",
  async (params, thunkAPI) => {
    const currentToDo = await toDoService.getIncomplete();
    return currentToDo;
  }
);

export const addTodo = createAsyncThunk(
  "toDo/addTodo",
  async (data, thunkAPI) => {
    const currentToDo = await toDoService.addTodo(data);
    return currentToDo;
  }
);

export const editTodo = createAsyncThunk(
  "toDo/editTodo",
  async (data, thunkAPI) => {
    const currentToDo = await toDoService.editTodo(data);
    return currentToDo;
  }
);

export const deleteToDo = createAsyncThunk(
  "toDo/deleteToDo",
  async (params, thunkAPI) => {
    const currentToDo = await toDoService.deleteToDo(params);
    return currentToDo;
  }
);

const toDoSlice = createSlice({
  name: "toDo",
  initialState: {
    currentToDoes: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.currentToDoes = action.payload;
    });

    builder.addCase(getTotalToDoes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTotalToDoes.fulfilled, (state, action) => {
      state.loading = false;
      state.currentToDoes = action.payload;
    });

    builder.addCase(getCompleted.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCompleted.fulfilled, (state, action) => {
      state.loading = false;
      state.currentToDoes = action.payload;
    });

    builder.addCase(getUnfulfilled.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUnfulfilled.fulfilled, (state, action) => {
      state.loading = false;
      state.currentToDoes = action.payload;
    });

    builder.addCase(getIncomplete.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getIncomplete.fulfilled, (state, action) => {
      state.loading = false;
      state.currentToDoes = action.payload;
    });

    builder.addCase(addTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.currentToDoes = action.payload;
    });

    builder.addCase(editTodo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.currentToDoes = action.payload;
    });

    builder.addCase(deleteToDo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteToDo.fulfilled, (state, action) => {
      state.loading = false;
      state.currentToDoes = action.payload;
    });
  },
});

const { reducer: toDoReducer } = toDoSlice;

export default toDoReducer;
