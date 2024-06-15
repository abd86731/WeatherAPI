import Panel from "./reusable/Panel";
import { getWeatherIcons } from "../tools/getIcons";
import type { WeatherSummary } from "../types/WeatherSummary";

export default function WeatherPanel({
  weatherData,
}: {
  weatherData: WeatherSummary;
}) {
  const iconPack = getWeatherIcons(weatherData.weather.id);

  return (
    <Panel className="weather">
      {iconPack && (
        <div className={`icon ${iconPack.class}`}>{iconPack.icon}</div>
      )}
      <div className="text">
        <div className="main">{weatherData.weather.main}</div>
        <div className="desc">{weatherData.weather.description}</div>
      </div>
    </Panel>
  );
}
