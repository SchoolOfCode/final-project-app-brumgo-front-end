import Fuse from "fuse.js";

export default function usePoiFilter(array, searchTerms) {
  let { categories, nameSearch } = searchTerms;
  //set defaults

  if (!categories || categories.length === 0) {
    categories = ["Building", "Market", "Event", "Culture", "FoodDrink"];
  }
  nameSearch = nameSearch || "";
  //filterby category

  let catFiltered = array.filter(obj => categories.includes(obj.category));

  var options = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: ["poiName"]
  };

  if (nameSearch === "") {
    return catFiltered;
  }

  var fuse = new Fuse(catFiltered, options); // "list" is the item array
  var result = fuse.search(nameSearch);

  return result;
}
