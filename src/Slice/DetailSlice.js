import { createSlice } from "@reduxjs/toolkit";

const DetailSlice = createSlice({
  name: "detailSlice",
  initialState: {
    name: "",
    email: "",
    notes: null,
    country: "",
    filterTime: [],
    guest: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setFilterTime: (state, action) => {
      state.filterTime.push(action.payload);
    },
    setGuest: (state, action) => {
      state.guest = action.payload;
    },
  },
});

export const {
  setName,
  setEmail,
  setNotes,
  setCountry,
  setGuest,
  setFilterTime,
} = DetailSlice.actions;
export default DetailSlice.reducer;
