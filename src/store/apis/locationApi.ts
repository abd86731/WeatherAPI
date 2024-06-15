import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { LocationResponse } from "../../types/LocationResponse";

const locationApi = createApi({
  reducerPath: "location",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nominatim.openstreetmap.org",
  }),
  endpoints(builder) {
    return {
      fetchLocation: builder.query<LocationResponse, string>({
        query: (term) => {
          return {
            url: "/search",
            params: {
              q: term,
              format: "geojson",
              limit: 5,
              "accept-language": "en-US",
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchLocationQuery } = locationApi;
export { locationApi };
