import { configureStore } from "@reduxjs/toolkit";
import fetchReducerValues from "./Slice/FetchSlice";
import dateReducerValues from "./Slice/DateSlice";

import detailReducerValues from "./Slice/DetailSlice";
export const store = configureStore({
  reducer: {
    fetchSlice: fetchReducerValues,
    dateSlice: dateReducerValues,

    detailSlice: detailReducerValues,
  },
});
