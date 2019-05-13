import React from "react";
import * as renderer from "react-test-renderer";
import HeaderSection from "./index";

describe("Header Section", () => {
  it("should match to snapshot", () => {
    const component = renderer.create(<HeaderSection />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
