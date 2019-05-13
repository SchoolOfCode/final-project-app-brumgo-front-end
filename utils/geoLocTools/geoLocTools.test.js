import toRad from "./degreesToRadians";
import distanceBetween from "./distanceBetween";

describe("toRad, Angles correctly converted to Radians rounded to 10 d.p.", () => {
  it("360 degrees converted to 2PI", () => {
    expect(toRad(360)).toEqual(6.2831853072);
  });
  it("180 degrees converted to PI", () => {
    expect(toRad(180)).toEqual(3.1415926536);
  });
  it("1 degree converted to PI/180", () => {
    expect(toRad(1)).toEqual(0.0174532925);
  });
});

describe("distanceBetween Function correctly calculates the distance between lat/lng pairs", () => {
  it("Outputs a Number", () => {
    expect(typeof distanceBetween(1, 1, 1, 1) === "number").toEqual(true);
  });
  it("throws an error if not all arguments are given", () => {
    expect(() => distanceBetween()).toThrow();
    expect(() => distanceBetween(1, 2, 3)).toThrow();
    expect(() => distanceBetween(1, 2)).toThrow();
    expect(() => distanceBetween(1)).toThrow();
  });
  it("throws an error if any of the arguments given are not numbers", () => {
    expect(() => distanceBetween(1, 2, 3, "a")).toThrow();
    expect(() => distanceBetween(1, 2, ["a"], 4)).toThrow();
    expect(() => distanceBetween(1, { key: 3 }, 3, 4)).toThrow();
    expect(() => distanceBetween("b", 2, 3, 4)).toThrow();
  });
  it("calculates distance between 2 points accurately to 2 d.p.", () => {
    expect(distanceBetween(60, 2, 55, 3)).toEqual(559158.45);
    expect(distanceBetween(52.478311, -1.887021, 52.474774, -1.885914)).toEqual(
      400.38
    );
  });
});
