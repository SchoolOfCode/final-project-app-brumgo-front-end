import toRad from "./degreesToRadians";
import distanceBetween from "./distanceBetween";
import distanceToPointsFromMe from "./distanceToPointsFromMe";

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

describe("returns a sorted (closest to farthest) array of distances between user location and POIs", () => {
  it("throws an error if the first argument (user location) is not in the form {latitude: Number, longitude: Number}", () => {
    expect(() => distanceToPointsFromMe(0, [])).toThrowError(
      "user position needs to be an object with keys 'longitude and 'latitude' only"
    );
  });

  let typeError = `Second argument should be an array of objects in format [{ poiName: "string", poiLocation: { lat: number, lng: number } }`;

  it("Throws an error if an array of objects not passed to second attribute", () => {
    expect(() =>
      distanceToPointsFromMe({ latitude: 1, longitude: 1 }, "oops")
    ).toThrowError(typeError);
  });

  it("throws an error if a poiName string not provided in any of the poi objects", () => {
    expect(() =>
      distanceToPointsFromMe({ latitude: 1, longitude: 1 }, [
        { poiName: 3, poiLocation: { no: 1, no: 1 } }
      ]).toThrowError(typeError)
    );
  });

  it.skip("Throws an error if the second argument objects in array does not have {poiName, poiLocation: {latitude , longitude}} keys", () => {
    expect(() =>
      distanceToPointsFromMe({ latitude: 1, longitude: 1 }, [
        { poiLocation: { lat: 1, nolong: 1 } }
      ])
    ).toThrowError(typeError);
    expect(() =>
      distanceToPointsFromMe({ latitude: 1, longitude: 1 }, [
        { lat: 1, nolong: 1 }
      ])
    ).toThrowError(typeError);
    // expect(() =>
    //   distanceToPointsFromMe({ latitude: 1, longitude: 1 }, [
    //     { poiName: "randomplace", poiLocation: { no: 1, no: 1 } }
    //   ])
    // ).toThrowError(typeError);
  });

  it.skip("should return an object for each of the POIs in the POI array", () => {
    expect(
      distanceToPointsFromMe({ latitude: 1, longitude: 1 }, [
        { poiName: "randomPlace", poiLocation: { lat: 1, lng: 1 } },
        { poiName: "randomPlace", poiLocation: { lat: 1, lng: 1 } },
        { poiName: "randomPlace", poiLocation: { lat: 1, lng: 1 } },
        { poiName: "randomPlace", poiLocation: { lat: 1, lng: 1 } }
      ]).length
    ).toEqual(4);
  });

  it("should return an accurate distance between userLocation and each POI in the poi array", () => {
    expect(
      distanceToPointsFromMe({ latitude: 60, longitude: 2 }, [
        { poiName: "randomPlace", poiLocation: { lat: 55, lng: 3 } }
      ])
    ).toEqual([{ randomPlace: 559158.45 }]);

    expect(
      distanceToPointsFromMe({ latitude: 52.478311, longitude: -1.887021 }, [
        {
          poiName: "Digbeth Place",
          poiLocation: { lat: 52.474774, lng: -1.885914 }
        },
        { poiName: "randomPlace", poiLocation: { lat: 55, lng: 3 } }
      ])
    ).toEqual([{ "Digbeth Place": 400.38 }, { randomPlace: 426352.12 }]);
  });

  it("should return the objects in order from closest to farthest", () => {
    expect(
      distanceToPointsFromMe({ latitude: 52.478311, longitude: -1.887021 }, [
        { poiName: "Equatorial", poiLocation: { lat: 1, lng: 1 } },
        { poiName: "randomPlace", poiLocation: { lat: 55, lng: 3 } },
        {
          poiName: "Digbeth Place",
          poiLocation: { lat: 52.474774, lng: -1.885914 }
        }
      ])
    ).toEqual([
      { "Digbeth Place": 400.38 },
      { randomPlace: 426352.12 },
      { Equatorial: 5730418.47 }
    ]);
  });
});
