import {
  TiWeatherStormy,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherWindyCloudy,
  TiWeatherSunny,
  TiWeatherCloudy,
} from "react-icons/ti";
import { BsEmojiFrown, BsEmojiNeutral, BsEmojiSmile } from "react-icons/bs";

function getWeatherIcons(weatherId: number) {
  const id = weatherId.toString();

  switch (id[0]) {
    case "2":
      return {
        icon: <TiWeatherStormy />,
        class: "storm",
      };
    case "3":
      return {
        icon: <TiWeatherShower />,
        class: "drizzle",
      };
    case "5":
      return {
        icon: <TiWeatherDownpour />,
        class: "rain",
      };
    case "6":
      return {
        icon: <TiWeatherSnow />,
        class: "snow",
      };
    case "7":
      return {
        icon: <TiWeatherWindyCloudy />,
        class: "atmosphere",
      };
    case "8":
      if (id === "800") {
        return {
          icon: <TiWeatherSunny />,
          class: "clear",
        };
      } else {
        return {
          icon: <TiWeatherCloudy />,
          class: "clouds",
        };
      }
  }
}

function getEmojiIcons(temp: number) {
  if (temp > 30 || temp < 10) {
    return {
      icon: <BsEmojiFrown />,
      class: "bad",
    };
  } else if (temp > 24 || temp < 16) {
    return {
      icon: <BsEmojiNeutral />,
      class: "normal",
    };
  } else {
    return {
      icon: <BsEmojiSmile />,
      class: "good",
    };
  }
}

export { getWeatherIcons, getEmojiIcons };
