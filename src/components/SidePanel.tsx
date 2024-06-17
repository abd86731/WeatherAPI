import { MdOutlineAir } from "react-icons/md";
import { RiSearchEyeLine } from "react-icons/ri";
import { PiCloudSun } from "react-icons/pi";
import Panel from "./reusable/Panel";
import getWindScale from "../tools/getWindScale";
import getPercent from "../tools/getPercent";
import type { WeatherSummary } from "../types/WeatherSummary";

export default function SidePanel({
  weatherData,
}: {
  weatherData: WeatherSummary;
}) {
  const windPack = getWindScale(weatherData.main.wind_speed);

  return (
    <Panel className="side">
      <div className="top">
        <div className="item">
          <RiSearchEyeLine />
          <label>Visibility</label>
          <div className="number">{weatherData.main.visibility} m</div>
        </div>
        <div className="item wind">
          <MdOutlineAir />
          <label>Wind Scale</label>
          <div className={`number ${windPack.class}`}>{windPack.type}</div>
        </div>
        <div className="item">
          <PiCloudSun />
          <label>Cloudiness</label>
          <div className="number">{weatherData.main.clouds} %</div>
        </div>
      </div>
      <div className="bottom">
        {weatherData.main.rain && (
          <div className="rain">
            <label>Rain Volume for last 1 hour</label>
            <div className="container">
              <div
                className="inner"
                style={{
                  width: `${getPercent(weatherData.main.rain, "rain")}%`,
                }}
              ></div>
            </div>
            <div className="text">{weatherData.main.rain} mm</div>
          </div>
        )}
        {weatherData.main.snow && (
          <div className="snow">
            <label>Snow Volume for last 1 hour</label>
            <div className="container">
              <div
                className="inner"
                style={{
                  width: `${getPercent(weatherData.main.snow, "snow")}%`,
                }}
              ></div>
            </div>
            <div className="text">{weatherData.main.snow} mm</div>
          </div>
        )}
      </div>
    </Panel>
  );
}
