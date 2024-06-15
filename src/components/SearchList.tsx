import SearchItem from "./SearchItem";
import Spinner from "./reusable/Spinner";
import type { LocationSummary } from "../types/LocationSummary";

export type onLocateType = (location: LocationSummary) => void;

interface SearchListProp {
  locations: LocationSummary[];
  onLocate: onLocateType;
  isError: boolean;
  isFetching: boolean;
}

export default function SearchList({
  locations,
  onLocate,
  isError,
  isFetching,
}: SearchListProp) {
  const content =
    locations.length === 0 ? (
      isError ? (
        <div className="searchText error">Error in searching!</div>
      ) : (
        <div className="searchText none">No result...</div>
      )
    ) : isFetching ? (
      <div className="spinner">
        <Spinner />
      </div>
    ) : (
      locations.map((item) => {
        return <SearchItem key={item.id} location={item} onLocate={onLocate} />;
      })
    );

  return <div className="SearchList">{content}</div>;
}
