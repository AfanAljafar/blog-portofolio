import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./toDoSlice";

// Ambil state awal dari localStorage jika ada
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch {
    // ignore write errors
  }
};

export const store = configureStore({
  reducer: { toDoApp: toDoReducer },
  preloadedState: loadState(),
});

// Simpan ke localStorage setiap kali state berubah
store.subscribe(() => {
  saveState({
    toDoApp: store.getState().toDoApp,
  });
});
