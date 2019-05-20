import usePoiFilter from "./usePoiFilter";

import pois from "../../data/digbethPois";

describe("Filters given list by selected categories and by searched name or part thereof", () => {
  It("returns a list filtered by selected categories", () => {
    expect(
      usePoiFilter(pois, [
        "Building",
        "Market",
        "Event",
        "Culture",
        "FoodDrink"
      ]).length
    ).toEqual(12);
  });
});
