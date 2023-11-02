import { createSlice } from "@reduxjs/toolkit";
const initialState = {    //just the slice of the state that this reducer is responsible for
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});



export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
