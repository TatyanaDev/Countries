export const sortByCountry = ({ data, flag, setFlag }) => {
  data.sort((a, b) =>
    flag ? a.name?.localeCompare(b.name) : b.name?.localeCompare(a.name)
  );

  setFlag((prevFlag) => !prevFlag);
};

export const sortByCapital = ({ data, flag, setFlag }) => {
  const withCapital = data.filter(({ capital }) => capital);
  const withoutCapital = data.filter(({ capital }) => !capital);

  withCapital.sort((a, b) =>
    flag
      ? a.capital?.localeCompare(b.capital)
      : b.capital?.localeCompare(a.capital)
  );

  flag
    ? data.splice(0, data.length, ...[...withCapital, ...withoutCapital])
    : data.splice(0, data.length, ...[...withoutCapital, ...withCapital]);

  setFlag((prevFlag) => !prevFlag);
};

export const sortByPopulation = ({ data, flag, setFlag }) => {
  data.sort((a, b) =>
    flag ? a.population - b.population : b.population - a.population
  );

  setFlag((prevFlag) => !prevFlag);
};
