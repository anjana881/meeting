import { createSlice } from "@reduxjs/toolkit";

const DateSlice = createSlice({
  name: "dateSlice",
  initialState: {
    date: null,
    time: null,
    location: null,
  },
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});
export const { setDate, setTime, setLocation } = DateSlice.actions;
export default DateSlice.reducer;
