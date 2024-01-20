import { configureStore } from "@reduxjs/toolkit";
import reducer from "./globalstate";

export const store = configureStore({
  reducer,
});
