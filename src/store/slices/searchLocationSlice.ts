import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { LocationSummary } from "../../types/LocationSummary";

const initialState = {
  id: NaN,
  name: "",
  longitude: NaN,
  latitude: NaN,
  type: "",
} satisfies LocationSummary as LocationSummary;

const searchLocationSlice = createSlice({
  name: "searchLocation",
  initialState,
  reducers: {
    setLocation(_, action: PayloadAction<LocationSummary>) {
      return action.payload;
    },
  },
});

export const { setLocation } = searchLocationSlice.actions;
export const searchLocationReducer = searchLocationSlice.reducer;
