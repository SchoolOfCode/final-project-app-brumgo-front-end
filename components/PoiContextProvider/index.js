import React, { useState } from "react";

import pois from "../../data/digbethPois";
import usePoiFilter from "../../utils/hooks/usePoiFilter";

const PoiContext = React.createContext();

const PoiContextProvider = ({ children }) => {
  const [searchTerms, setSearchTerms] = useState({
    categories: ["Building", "Market", "Event", "Culture", "FoodDrink"],
    nameSearch: ""
  });
  const [filteredPois, setFilteredPois] = useState(
    usePoiFilter(pois, searchTerms)
  );
  const [directionsData, setDirectionData] = useState(
    null
    //{
    //origin: { latitude: 52, longitude: -1 },
    //destination: { latitude: 52, longitude: -1 }
    //}
  );

  const setSearchAndFilter = newSearchTerms => {
    setSearchTerms(prevState => ({ ...prevState, ...newSearchTerms }));
    setFilteredPois(usePoiFilter(pois, newSearchTerms));
  };

  const setDestination = destination => {
    setDirectionData(prevProps => {
      if (
        prevProps &&
        destination &&
        prevProps.latitude === destination.latitude
      ) {
        return null;
      }
      return destination;
    });
  };

  return (
    <PoiContext.Provider
      value={[
        {
          pois: pois,
          filteredPois: filteredPois,
          searchTerms: searchTerms,
          directionsData: directionsData
        },
        { setSearchAndFilter, setDestination }
      ]}
    >
      {children}
    </PoiContext.Provider>
  );
};

export { PoiContext, PoiContextProvider };

// import { PoiContext } from "../PoiContextProvider";
//------
// const [{ pois, filteredPois, searchTerms }, setPoiSearchContext] = useContext(
//   PoiContext
// );

// setPoiSearchContext requires an object passed of {categories: ["Building etc..."], nameSearch: "" }
// or one of either {categories[]} or {nameSearch: ''}
