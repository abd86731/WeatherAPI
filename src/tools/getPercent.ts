export default function getPercent(volume: number, type: "rain" | "snow") {
  const max = type === "rain" ? 100 : 30;
  const origin = Number(((volume / max) * 100).toFixed(2));

  let percent = origin;
  if (origin < 5) {
    percent = 5;
  } else if (origin > 100) {
    percent = 100;
  }
  return percent;
}
