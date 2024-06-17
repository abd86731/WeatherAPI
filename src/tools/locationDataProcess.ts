import type { LocationSummary } from "../types/LocationSummary";

interface DataProcessProp {
  geometry: {
    coordinates: number[];
  };
  properties: {
    addresstype: string;
    display_name: string;
    place_id: number;
  };
}

export default function locationDataProcess(
  item: DataProcessProp
): LocationSummary {
  return {
    id: item.properties.place_id,
    name: item.properties.display_name,
    longitude: item.geometry.coordinates[0],
    latitude: item.geometry.coordinates[1],
    type: item.properties.addresstype,
  };
}
