import usePoiFilter from "./usePoiFilter";

import pois from "../../data/digbethPoisTestData";

describe("Filters given list by selected categories", () => {
  it("returns all pois when all categories are selected (default)", () => {
    expect(
      usePoiFilter(pois, {
        categories: ["Building", "Market", "Event", "Culture", "FoodDrink"]
      }).length
    ).toEqual(12);
  });

  it("returns only the pois with a selected category", () => {
    expect(usePoiFilter(pois, { categories: ["Culture"] }).length).toEqual(2);
    expect(usePoiFilter(pois, { categories: ["FoodDrink"] }).length).toEqual(4);
  });

  it("can filter multiple categories", () => {
    expect(
      usePoiFilter(pois, { categories: ["Culture", "FoodDrink"] }).length
    ).toEqual(6);
  });

  it("defaults to all categories when no category selected", () => {
    expect(usePoiFilter(pois, { categories: [] }).length).toEqual(12);
  });
});

describe("Additionally filters 'fuzzily' by poiName", () => {
  it("filters poi names exactly", () => {
    expect(usePoiFilter(pois, { nameSearch: "Dig Brew co" }).length).toEqual(1);
    expect(
      usePoiFilter(pois, { nameSearch: "The Custard Factory" }).length
    ).toEqual(1);
    expect(
      usePoiFilter(pois, { nameSearch: "Bull Ring Markets" }).length
    ).toEqual(1);
  });

  it("filters by part of the name", () => {
    expect(usePoiFilter(pois, { nameSearch: "Dig" }).length).toEqual(2);
    expect(usePoiFilter(pois, { nameSearch: "Bull Ring" }).length).toEqual(2);
    expect(usePoiFilter(pois, { nameSearch: "Birm" }).length).toEqual(1);
  });

  it("is case indifferent", () => {
    expect(usePoiFilter(pois, { nameSearch: "dig brew co" }).length).toEqual(1);
  });

  it("ignores lack of spaces", () => {
    expect(usePoiFilter(pois, { nameSearch: "DigBrewco" }).length).toEqual(1);
  });
});
