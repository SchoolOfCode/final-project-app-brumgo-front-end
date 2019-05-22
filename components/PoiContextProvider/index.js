import React, { useState } from "react";

import pois from "../../data/digbethPois";
import usePoiFilter from "../../utils/hooks/usePoiFilter";

const PoiContext = React.createContext();

const PoiContextProvider = ({ children }) => {
  const [searchTerms, setSearchTerms] = useState({
    categories: ["Building", "Market", "Event", "Culture", "FoodDrink"],
    nameSearch: ""
  });
  const [filteredPois, setFilteredPois] = useState(pois);

  const setSearchAndFilter = newSearchTerms => {
    setSearchTerms(prevState => ({ ...prevState, ...newSearchTerms }));
    setFilteredPois(usePoiFilter(pois, searchTerms));
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
