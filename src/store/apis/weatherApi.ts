import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { WeatherResponse } from "../../types/WeatherResponse";

const WEATHER_APIKEY = import.meta.env.VITE_WEATHER_APIKEY;

interface WeatherParams {
  lat: number;
  lon: number;
}

const weatherApi = createApi({
  reducerPath: "weather",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints(builder) {
    return {
      fetchWeather: builder.query<WeatherResponse, WeatherParams>({
        query: (coor) => {
          return {
            url: "/weather",
            params: {
              lat: coor.lat,
              lon: coor.lon,
              appid: WEATHER_APIKEY,
              units: "metric",
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchWeatherQuery } = weatherApi;
export { weatherApi };
