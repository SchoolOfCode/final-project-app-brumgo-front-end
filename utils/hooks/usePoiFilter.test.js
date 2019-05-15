import usePoiFilter from "./usePoiFilter";

import pois from "../../data/digbethPois";

describe("Filters given list by search term fuzzily", () => {
  it(`returns the whole array if filter is ""`, () => {
    expect(usePoiFilter(pois, "")).toEqual(pois);
  });

  it("filters by poiName", () => {
    expect(usePoiFilter(pois, "custard")).toEqual([
      {
        category: "Building",
        poiName: "The Custard Factory",
        poiLocation: {
          lat: 52.4752029,
          lng: -1.884587
        },
        poiTrivia:
          "The Custard Factory complex is set in fifteen acres (60,000 m²) of factory buildings, originally constructed by Sir Alfred Frederick Bird (1849–1922), the son of Alfred Bird (1811–1878), the inventor of egg-free custard.  He developed the recipe because his wife was allergic to eggs, the key ingredient used to thicken traditional custard. The Birds continued to serve real custard to dinner guests, until one evening when the egg-free custard was served instead, either by accident or design. The dessert was so well received by the other diners that Alfred Bird put the recipe into wider production. DID YOU KNOW...? The company was one of the early users of promotional items and colourful advertising campaigns. The famous 'three bird' logo, however, was relatively late in arriving, only introduced in 1929."
      }
    ]);

    expect(usePoiFilter(pois, "bullring")).toEqual([
      {
        category: "Building",
        poiName: "St Martin in the Bullring",
        poiLocation: {
          lat: 52.477074,
          lng: -1.893224
        },
        poiTrivia:
          "The present Victorian church was built on the site of a 13th-century predecessor, which was documented in 1263. The church was enlarged in medieval times and the resulting structure consisted of a lofty nave and chancel, north and south aisles and a northwest tower with spire."
      },
      {
        category: "Market",
        poiName: "Bull Ring Markets",
        poiLocation: {
          lat: 52.476499,
          lng: -1.892838
        },
        poiTrivia:
          "One of the oldest continuously trading markets in the world, The market legally began in 1154 when Peter de Bermingham, a local landowner, obtained a Charter of Marketing Rights from King Henry II."
      }
    ]);
  });
});
