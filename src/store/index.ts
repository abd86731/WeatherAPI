import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { locationApi } from "./apis/locationApi";
import { weatherApi } from "./apis/weatherApi";
import { searchLocationReducer } from "./slices/searchLocationSlice";

export const store = configureStore({
  reducer: {
    [locationApi.reducerPath]: locationApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    searchLocation: searchLocationReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(locationApi.middleware)
      .concat(weatherApi.middleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export { useFetchLocationQuery } from "./apis/locationApi";
export { useFetchWeatherQuery } from "./apis/weatherApi";
export { setLocation } from "./slices/searchLocationSlice";
