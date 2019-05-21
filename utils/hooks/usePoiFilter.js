export default function usePoiFilter(array, searchTerm) {
  const { categories, nameSearch } = searchTerm;
  //set defaults
  categories = categories || [
    "Building",
    "Market",
    "Event",
    "Culture",
    "FoodDrink"
  ];
  nameSearch = nameSearch || "";

  //filterby category

  let catFiltered = array.filter(obj => categories.includes(obj.category));

  return catFiltered;
}
