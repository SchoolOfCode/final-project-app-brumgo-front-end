import React from "react";
import MainAppComponent from "../MainAppComponent";
import { PoiContextProvider } from "../PoiContextProvider";

const MainAppWrapper = () => {
  return (
    <PoiContextProvider>
      <MainAppComponent />
    </PoiContextProvider>
  );
};

export default MainAppWrapper;
