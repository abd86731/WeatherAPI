import type { LocationSummary } from "../types/LocationSummary";
import type { onLocateType } from "./SearchList";

interface SearchItemProp {
  location: LocationSummary;
  onLocate: onLocateType;
}

export default function SearchItem({ location, onLocate }: SearchItemProp) {
  const displayName = (name: string) => {
    const parts = name.split(", ");
    let str: string = "";

    if (parts.length < 5) {
      parts.forEach((part, index) => {
        if (index < parts.length - 1) {
          str += part;
          if (index < parts.length - 2) {
            str += ", ";
          }
        }
      });
    } else {
      str = `${parts[0]}, ${parts[1]}, ... , ${parts[parts.length - 2]}`;
    }

    const displayType = location.type.split("_").join(" ");

    return (
      <div className="display-name" onClick={() => onLocate(location)}>
        <div className="front">{str}</div>
        <div className="end">
          <div className="country">{parts[parts.length - 1]}</div>
          <div className="type">{displayType}</div>
        </div>
      </div>
    );
  };

  return <div className="SearchItem">{displayName(location.name)}</div>;
}
