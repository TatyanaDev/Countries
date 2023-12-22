export const sortCountry = ({ data, flag, setFlag }) => {
  data.sort((a, b) =>
    flag ? a.name?.localeCompare(b.name) : b.name?.localeCompare(a.name)
  );
  setFlag((flag) => !flag);
};

export const sortCapital = ({ data, flag, setFlag }) => {
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

  setFlag((flag) => !flag);
};

export const sortPopulation = ({ data, flag, setFlag }) => {
  data.sort((a, b) =>
    flag ? a.population - b.population : b.population - a.population
  );
  setFlag((flag) => !flag);
};

export const sortPhoneCode = ({ data, flag, setFlag }) => {
  data.sort((a, b) =>
    flag ? a.callingCodes - b.callingCodes : b.callingCodes - a.callingCodes
  );
  setFlag((flag) => !flag);
};
