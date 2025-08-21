import { configureStore, combineReducers } from "@reduxjs/toolkit";
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

const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch {
    // ignore write errors
  }
};

const rootReducer = combineReducers({
  toDoApp: toDoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
});

// Simpan ke localStorage setiap kali state berubah
store.subscribe(() => {
  saveState({
    toDoApp: store.getState().toDoApp,
  });
});

// 🔑 deklarasi type RootState & AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
