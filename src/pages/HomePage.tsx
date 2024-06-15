import { useEffect, useState } from "react";
import ShowCard from "../components/ShowCard";
import getMainCity from "../tools/getMainCity";
import type { CityData } from "../tools/getMainCity";

interface Coor {
  lon: number;
  lat: number;
}

export default function HomePage() {
  const [cities, setCities] = useState<CityData[]>([]);
  const [coor, setCoor] = useState<Coor>({ lon: NaN, lat: NaN });

  const renderedCard = cities.map((city) => {
    return <ShowCard key={city.location.id} city={city} />;
  });

  // locate user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const local = {
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        };
        setCoor(local);
      });
    }
  }, []);

  // set 3 locations showing on the homepage
  useEffect(() => {
    const cityArr: CityData[] = [];
    while (cityArr.length < 3) {
      if (cityArr.length === 1 && !isNaN(coor.lat)) {
        cityArr.push({
          cityName: "Your location",
          location: {
            id: 0,
            name: "Your current location",
            longitude: coor.lon,
            latitude: coor.lat,
            type: "custom",
          },
        });
      } else {
        const newCity = getMainCity();
        if (!cityArr.some((obj) => obj.cityName === newCity.cityName)) {
          cityArr.push(newCity);
        }
      }
    }
    setCities(cityArr);
  }, [coor]);

  return (
    <div className="HomePage">
      <div className="cover"></div>
      <div className="top">
        <h2>Unwind, bond globally, amidst changing skies.</h2>
        <p>
          Now, let us embark on a journey to discover the world's present
          appearance.
        </p>
      </div>
      <div className="bottom">
        <div className="show">{renderedCard}</div>
      </div>
    </div>
  );
}
