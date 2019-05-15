import Fuse from "fuse.js";

export default function usePoiFilter(array, searchTerm) {
  const options = {
    shouldSort: false,
    threshold: 0.2,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["poiName", "category"]
  };

  let fuse = new Fuse(array, options); // "list" is the item array
  let result = fuse.search(searchTerm);

  return result;
}
