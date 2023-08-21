import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const musicslice = createSlice({
  name: "trouvsearch",
  initialState,
  reducers: {
    updatetrouvsearch: (state, action) => {
      state.value = action.payload;
    },
    nexttrouvsearch: (state) => {
      state.value = state.value + 1;
    },
    previoustrouvsearch: (state) => {
      state.value = state.value - 1;
    },
  },
});
export const { updatetrouvsearch, nexttrouvsearch, previoustrouvsearch } =
  musicslice.actions;
export default musicslice.reducer;
