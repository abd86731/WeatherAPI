import type { LocationSummary } from "../types/LocationSummary";

export interface CityData {
  cityName: string;
  location: LocationSummary;
}

const CITY_DATA: CityData[] = [
  {
    cityName: "New York",
    location: {
      id: 390059406,
      latitude: 40.7127281,
      longitude: -74.0060152,
      name: "New York, United States",
      type: "city",
    },
  },
  {
    cityName: "Los Angeles",
    location: {
      id: 369253421,
      latitude: 34.0536909,
      longitude: -118.242766,
      name: "Los Angeles, Los Angeles County, California, United States",
      type: "city",
    },
  },
  {
    cityName: "London",
    location: {
      id: 273135560,
      latitude: 51.5156177,
      longitude: -0.0919983,
      name: "City of London, Greater London, England, United Kingdom",
      type: "city",
    },
  },
  {
    cityName: "Paris",
    location: {
      id: 82297359,
      latitude: 48.8534951,
      longitude: 2.3483915,
      name: "Paris, Ile-de-France, Metropolitan France, France",
      type: "city",
    },
  },
  {
    cityName: "Tokyo",
    location: {
      id: 257202331,
      latitude: 35.6821936,
      longitude: 139.762221,
      name: "Tokyo, Japan",
      type: "province",
    },
  },
  {
    cityName: "Beijing",
    location: {
      id: 225428303,
      latitude: 40.190632,
      longitude: 116.412144,
      name: "Beijing, China",
      type: "state",
    },
  },
  {
    cityName: "Sydney",
    location: {
      id: 373903084,
      latitude: -33.8698439,
      longitude: 151.2082848,
      name: "Sydney, Council of the City of Sydney, New South Wales, Australia",
      type: "city",
    },
  },
  {
    cityName: "Seoul",
    location: {
      id: 389582324,
      latitude: 37.5666791,
      longitude: 126.9782914,
      name: "Seoul, South Korea",
      type: "city",
    },
  },
  {
    cityName: "Dubai",
    location: {
      id: 70734656,
      latitude: 25.2653471,
      longitude: 55.2924914,
      name: "Dubai, United Arab Emirates",
      type: "city",
    },
  },
  {
    cityName: "São Paulo",
    location: {
      id: 10297415,
      latitude: -22.0702705,
      longitude: -48.4333875,
      name: "São Paulo, Southeast Region, Brazil",
      type: "state",
    },
  },
  {
    cityName: "Mumbai",
    location: {
      id: 215698983,
      latitude: 19.0785451,
      longitude: 72.878176,
      name: "Mumbai, Maharashtra, India",
      type: "city",
    },
  },
  {
    cityName: "Singapore",
    location: {
      id: 380577328,
      latitude: 1.2899175,
      longitude: 103.8519072,
      name: "Singapore",
      type: "city",
    },
  },
  {
    cityName: "Moscow",
    location: {
      id: 206154094,
      latitude: 55.7505412,
      longitude: 37.6174782,
      name: "Moscow, Central Federal District, Russia",
      type: "city",
    },
  },
  {
    cityName: "Vancouver",
    location: {
      id: 31937511,
      latitude: 49.2608724,
      longitude: -123.113952,
      name: "Vancouver, Metro Vancouver Regional District, British Columbia, Canada",
      type: "city",
    },
  },
  {
    cityName: "Rome",
    location: {
      id: 100455404,
      latitude: 41.8933203,
      longitude: 12.4829321,
      name: "Rome, Roma Capitale, Lazio, Italy",
      type: "city",
    },
  },
  {
    cityName: "Cape Town",
    location: {
      id: 60245967,
      latitude: -33.928992,
      longitude: 18.417396,
      name: "Cape Town, City of Cape Town, Western Cape, 8001, South Africa",
      type: "city",
    },
  },
  {
    cityName: "Bangkok",
    location: {
      id: 221775479,
      latitude: 13.7524938,
      longitude: 100.4935089,
      name: "Bangkok, Thailand",
      type: "city",
    },
  },
  {
    cityName: "Mexico City",
    location: {
      id: 387000154,
      latitude: 19.4326296,
      longitude: -99.1331785,
      name: "Mexico City, Cuauhtémoc, Mexico City, Mexico",
      type: "city",
    },
  },
];

export default function getMainCity() {
  const index = Math.floor(Math.random() * CITY_DATA.length);

  return CITY_DATA[index];
}
