import Panel from "./reusable/Panel";
import type { LocationSummary } from "../types/LocationSummary";
import type { WeatherSummary } from "../types/WeatherSummary";

export default function LocationPanel({
  location,
  weatherData,
}: {
  location: LocationSummary;
  weatherData: WeatherSummary;
}) {
  return (
    <Panel className="location">
      <div className="top">
        <div className="name">{location.name}</div>
        <div className="info-1">
          <div className="type">{location.type}</div>
          <div className="coor">
            ( {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)} )
          </div>
        </div>
      </div>
      <div className="info-2">
        <label>station</label>
        {weatherData.station.name ? (
          <div>
            {weatherData.station.name} ({weatherData.station.country})
          </div>
        ) : (
          <div>-</div>
        )}
      </div>
    </Panel>
  );
}
