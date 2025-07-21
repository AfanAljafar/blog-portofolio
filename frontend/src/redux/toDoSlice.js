import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDos: [],
};

export const toDoSlice = createSlice({
  name: "toDoApp",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.toDos.push(action.payload);
    },
    updateToDo: (state, action) => {
      const { id, data } = action.payload;
      const idx = state.toDos.findIndex((todo) => todo.id === id);
      if (idx !== -1) {
        state.toDos[idx] = { ...state.toDos[idx], ...data };
      }
    },
    deleteToDo: (state, action) => {
      state.toDos = state.toDos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addToDo, updateToDo, deleteToDo } = toDoSlice.actions;
export default toDoSlice.reducer;
