const dataFilter = (country, searchTerm) => {
  const isSuitableCountry =
    country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0;
  return isSuitableCountry;
};

export default dataFilter;
