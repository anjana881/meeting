import { createSlice } from "@reduxjs/toolkit";

const FetchSlice = createSlice({
  name: "fetchSlice",
  initialState: {
    data: null,
  },
  reducers: {
    setData: (state, value) => {
      state.data = value.payload;
    },
  },
});
export const { setData } = FetchSlice.actions;
export default FetchSlice.reducer;
