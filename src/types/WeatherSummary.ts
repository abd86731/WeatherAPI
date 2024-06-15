export interface WeatherSummary {
  station: {
    name: string;
    country: string;
  };
  weather: {
    id: number;
    main: string;
    description: string;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    visibility: number;
    wind_speed: number;
    clouds: number;
    rain?: number;
    snow?: number;
  };
}
