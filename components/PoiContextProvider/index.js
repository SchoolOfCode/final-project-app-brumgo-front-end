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

  const setSearchAndFilter = newSearchTerms => {
    setSearchTerms(prevState => ({ ...prevState, ...newSearchTerms }));
    setFilteredPois(prevState => usePoiFilter(pois, newSearchTerms));
  };

  return (
    <PoiContext.Provider
      value={[
        {
          pois: pois,
          filteredPois: filteredPois,
          searchTerms: searchTerms
        },
        setSearchAndFilter
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
