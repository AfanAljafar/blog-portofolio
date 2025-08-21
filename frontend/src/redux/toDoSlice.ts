import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ToDo = {
  id: string;
  text: string;
  completed: boolean;
};

type ToDoState = {
  toDos: ToDo[];
};

const initialState: ToDoState = {
  toDos: [],
};

export const toDoSlice = createSlice({
  name: "toDoApp",
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<ToDo>) => {
      state.toDos.push(action.payload);
    },
    updateToDo: (
      state,
      action: { payload: { id: string; data: Partial<Omit<ToDo, "id">> } }
    ) => {
      const { id, data } = action.payload;
      const idx = state.toDos.findIndex((todo) => todo.id === id);
      if (idx !== -1) {
        state.toDos[idx] = { ...state.toDos[idx], ...data } as ToDo;
      }
    },

    deleteToDo: (state, action) => {
      state.toDos = state.toDos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addToDo, updateToDo, deleteToDo } = toDoSlice.actions;
export default toDoSlice.reducer;
