import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useFetchWeatherQuery } from "../store";
import { IoWarning } from "react-icons/io5";
import weatherDataProcess from "../tools/weatherDataProcess";
import getBackground from "../tools/getBackground";
import Spinner from "../components/reusable/Spinner";
import WeatherPanel from "../components/WeatherPanel";
import LocationPanel from "../components/LocationPanel";
import SidePanel from "../components/SidePanel";
import TempPanel from "../components/TempPanel";
import type { RootState } from "../store";
import type { WeatherSummary } from "../types/WeatherSummary";
import type { CityData } from "../tools/getMainCity";

interface CardObj {
  cardData: WeatherSummary;
  city: CityData;
}

export default function ResultPage() {
  const navigate = useNavigate();
  const locationHook = useLocation();
  // weather data from clicking on HomePage's ShowCard
  const { cardData, city }: CardObj = locationHook.state || {};
  // location data from clicking on SearchingItem
  const location = useSelector((state: RootState) => state.searchLocation);

  // fetching weather data
  const { currentData, error, isFetching } = useFetchWeatherQuery(
    {
      lon: location.longitude,
      lat: location.latitude,
    },
    {
      skip: !!cardData || isNaN(location.id),
    }
  );

  const renderedContent = () => {
    if (currentData) {
      const weatherData = weatherDataProcess(currentData);

      return (
        <div className="weather-content">
          <WeatherPanel weatherData={weatherData} />
          <LocationPanel location={location} weatherData={weatherData} />
          <SidePanel weatherData={weatherData} />
          <TempPanel weatherData={weatherData} />
        </div>
      );
    }
    if (cardData && city) {
      const cardLocation = city.location;

      return (
        <div className="weather-content">
          <WeatherPanel weatherData={cardData} />
          <LocationPanel location={cardLocation} weatherData={cardData} />
          <SidePanel weatherData={cardData} />
          <TempPanel weatherData={cardData} />
        </div>
      );
    }
    if (error) {
      <div className="secondary error">
        <IoWarning />
        <h2>Error in loading data.</h2>
      </div>;
    }
    if (isFetching) {
      return (
        <div className="secondary fetching">
          <Spinner />
          <h3>Loading data...</h3>
        </div>
      );
    }
  };

  const background = getBackground();

  useEffect(() => {
    if (isNaN(location.id) && !cardData) {
      navigate("/");
    }
  }, []);

  return (
    <div
      className="ResultPage"
      style={{
        backgroundImage: background,
      }}
    >
      <div className="cover"></div>
      {renderedContent()}
    </div>
  );
}
