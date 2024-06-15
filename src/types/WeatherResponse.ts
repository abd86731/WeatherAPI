export interface WeatherResponse {
  name: string;
  sys: {
    country: string;
  };
  weather: {
    id: number;
    main: string;
    description: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  rain?: {
    "1h": number;
  };
  snow?: {
    "1h": number;
  };
}
