import { configureStore } from "@reduxjs/toolkit";
import musicplaysliceReducer from "./musicplayslice";

export const store = configureStore({
  reducer: {
    trouvsearch: musicplaysliceReducer,
  },
});
