export interface LocationResponse {
  features: {
    geometry: {
      coordinates: number[];
    };
    properties: {
      addresstype: string;
      display_name: string;
      place_id: number;
    };
  }[];
}
