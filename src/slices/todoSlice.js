import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    clearTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id === action.payload.id);
    },
    deferTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.defer = true;
        }
      });
    },
  },
});

export const { addTodo, clearTodo, deferTodo } = todoSlice.actions;

export default todoSlice.reducer;
