import React from "react";

import LoginTabs from "./LoginTabs";
import MasterNavContext from "../NavigationContext";

export default (LoginApp = props => {
  return (
    <MasterNavContext.Provider value={props.navigation}>
      <LoginTabs />
    </MasterNavContext.Provider>
  );
});
