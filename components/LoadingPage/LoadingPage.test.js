import React from "react";
import * as renderer from "react-test-renderer";
import LoadingPage from "./index";

describe("LoadingPage", () => {
  it("should match to snapshot", () => {
    const component = renderer.create(<LoadingPage />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
