import type { WeatherResponse } from "../types/WeatherResponse";

export default function dataProcess(res: WeatherResponse) {
  return {
    station: {
      name: res.name,
      country: res.sys.country,
    },
    weather: {
      id: res.weather[0].id,
      main: res.weather[0].main,
      description: res.weather[0].description,
    },
    main: {
      temp: res.main.temp,
      feels_like: res.main.feels_like,
      temp_min: res.main.temp_min,
      temp_max: res.main.temp_max,
      pressure: res.main.pressure,
      humidity: res.main.humidity,
      visibility: res.visibility,
      wind_speed: res.wind.speed,
      clouds: res.clouds.all,
      rain: res.rain?.["1h"],
      snow: res.snow?.["1h"],
    },
  };
}
