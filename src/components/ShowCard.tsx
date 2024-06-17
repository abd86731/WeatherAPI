import { useNavigate } from "react-router-dom";
import { IoMdLocate } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
import { useFetchWeatherQuery } from "../store";
import weatherDataProcess from "../tools/weatherDataProcess";
import { getWeatherIcons } from "../tools/getIcons";
import { getTempColor } from "../tools/getColors";
import Panel from "./reusable/Panel";
import Spinner from "./reusable/Spinner";
import type { CityData } from "../tools/getMainCity";

interface ShowCardProp {
  city: CityData;
}

export default function ShowCard({ city }: ShowCardProp) {
  const navigate = useNavigate();

  // fetching weather data
  const { currentData, error, isLoading } = useFetchWeatherQuery({
    lon: city.location.longitude,
    lat: city.location.latitude,
  });

  const renderedContent = () => {
    if (currentData) {
      const weatherData = weatherDataProcess(currentData);
      const iconPack = getWeatherIcons(weatherData.weather.id);
      const isCustom = city.location.type === "custom";
      const tempColor = getTempColor(weatherData.main.temp);

      // onClick event
      const handleClick = () => {
        navigate(
          `/result/@${city.location.latitude},${city.location.longitude}`,
          {
            state: {
              cardData: weatherData,
              city: city,
            },
          }
        );
      };

      return (
        <div className="content" onClick={handleClick}>
          <div>
            {isCustom ? (
              <div className="name custom">
                <IoMdLocate />
                &nbsp;{city.cityName}
              </div>
            ) : (
              <div className="name">{city.cityName}</div>
            )}
            <div className="weather">
              {iconPack && (
                <div className={`icon ${iconPack.class}`}>{iconPack.icon}</div>
              )}
            </div>
          </div>
          <div className="temp">
            <div className={`main ${tempColor}`}>
              {weatherData.main.temp} °C
            </div>
            <div className="range">{`${weatherData.main.temp_min} ~ ${weatherData.main.temp_max} °C`}</div>
          </div>
        </div>
      );
    }
    if (error) {
      return (
        <div className="error">
          <IoWarning />
          Something wrong...
        </div>
      );
    }
    if (isLoading) {
      return (
        <div className="loading">
          <Spinner />
        </div>
      );
    }
  };

  return (
    <div className="ShowCard">
      <Panel>{renderedContent()}</Panel>
    </div>
  );
}
