import { LuGlassWater } from "react-icons/lu";
import { BiWater } from "react-icons/bi";
import Panel from "./reusable/Panel";
import { getEmojiIcons } from "../tools/getIcons";
import { getTempColor, getHumidColor } from "../tools/getColors";
import type { WeatherSummary } from "../types/WeatherSummary";

export default function TempPanel({
  weatherData,
}: {
  weatherData: WeatherSummary;
}) {
  const iconPack = getEmojiIcons(weatherData.main.feels_like);

  return (
    <Panel className="temp">
      <div className="left">
        <div className={`current ${getTempColor(weatherData.main.temp)}`}>
          {weatherData.main.temp} °C
        </div>
        <div className="range">
          <div className={`min ${getTempColor(weatherData.main.temp)}`}>
            {weatherData.main.temp_min}
          </div>
          &nbsp;~&nbsp;
          <div className={`max ${getTempColor(weatherData.main.temp)}`}>
            {weatherData.main.temp_max}
          </div>
          &nbsp;°C
        </div>
      </div>
      <div className="right">
        <div className={`item ${iconPack.class}`}>
          <label>
            {iconPack.icon}
            Feels-like
          </label>
          <div className="number">{weatherData.main.feels_like} °C</div>
        </div>
        <div className={`item ${getHumidColor(weatherData.main.humidity)}`}>
          <label>
            <LuGlassWater />
            Humidity
          </label>
          <div className="number">{weatherData.main.humidity} %</div>
        </div>
        <div className="item">
          <label>
            <BiWater />
            Pressure
          </label>
          <div className="number">{weatherData.main.pressure} hPa</div>
        </div>
      </div>
    </Panel>
  );
}
