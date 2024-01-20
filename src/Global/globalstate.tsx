import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleState: false,
};

const globalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    changeState: (state, { payload }) => {
      state.toggleState = payload;
    },
  },
});

export const { changeState } = globalState.actions;

export default globalState.reducer;
