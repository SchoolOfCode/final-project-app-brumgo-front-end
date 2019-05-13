import toRad from "./degreesToRadians";

describe("angles correctly converted to Radians rounded to 10 d.p.", () => {
  it("360 degrees converted to 2PI", () => {
    expect(toRad(360)).toBe(6.2831853072);
  });
  it("180 degrees converted to PI", () => {
    expect(toRad(180)).toBe(3.1415926536);
  });
  it("1 degree converted to PI/180", () => {
    expect(toRad(1)).toBe(0.0174532925);
  });
});
