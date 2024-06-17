import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import _ from "lodash";
import { useDispatch } from "react-redux";
import SearchList from "./SearchList";
import { useFetchLocationQuery } from "../store";
import { setLocation } from "../store";
import locationDataProcess from "../tools/locationDataProcess";
import type { LocationSummary } from "../types/LocationSummary";

export default function SearchInput() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // process with fetching result
  const { data, error, isFetching } = useFetchLocationQuery(searchTerm);
  let locationsData: null | LocationSummary[] = null;
  let isError: boolean = false;
  if (data) {
    locationsData = data.features.map((item) => locationDataProcess(item));
  }
  if (error) {
    isError = true;
    locationsData = [];
  }

  // handleClick function used by SearchItem
  const onLocate = (location: LocationSummary) => {
    navigate(`/result/@${location.latitude},${location.longitude}`);
    setTerm("");
    dispatch(setLocation(location));
  };

  // input debounce
  const debounce = useCallback(
    _.debounce((text) => {
      setSearchTerm(text);
    }, 300),
    []
  );
  useEffect(() => {
    debounce(term);
  }, [term]);

  return (
    <div className="SearchInput">
      <div className="form">
        <div className="icon">
          <MdSearch />
        </div>
        <div className="input">
          <input
            type="text"
            value={term}
            placeholder="Search for a place"
            onChange={(e) => setTerm(e.target.value)}
          />
          {term && locationsData && (
            <SearchList
              locations={locationsData}
              onLocate={onLocate}
              isError={isError}
              isFetching={isFetching}
            />
          )}
        </div>
      </div>
    </div>
  );
}
