import React from "react";
import MainAppComponent from "../MainAppComponent";
import { PoiContextProvider } from "../PoiContextProvider";
import NavContext from "../NavigationContext";

const MainAppWrapper = props => {
  {
    console.log("wrapperprops", props);
  }
  return (
    <PoiContextProvider>
      <NavContext.Provider value={props.navigation}>
        <MainAppComponent />
      </NavContext.Provider>
    </PoiContextProvider>
  );
};

export default MainAppWrapper;
