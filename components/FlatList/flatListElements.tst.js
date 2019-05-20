import React from "react";
import * as renderer from "react-test-renderer";
import Component from "./index";

describe("Header Section", () => {
  it("should match to snapshot", () => {
    const component = renderer.create(<Component />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
