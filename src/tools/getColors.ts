function getTempColor(temp: number) {
  if (temp > 30) {
    return "hot";
  } else if (temp < 10 && temp >= 0) {
    return "cool";
  } else if (temp < 0) {
    return "cold";
  } else {
    return "";
  }
}

function getHumidColor(humid: number) {
  if (humid >= 70 || humid < 25) {
    return "bad";
  } else if (humid >= 60 || humid < 30) {
    return "normal";
  } else {
    return "good";
  }
}

export { getTempColor, getHumidColor };
