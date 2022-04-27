export const sortCountry = ({ data, flag, setFlag, field }) => {
  data.sort((a, b) => flag ? a.name?.localeCompare(b.name) : b.name?.localeCompare(a.name));
  setFlag(flag => !flag);
};

export const sortCapital = ({ data, flag, setFlag }) => {
  data.sort((a, b) => flag ? a.capital?.localeCompare(b.capital) : b.capital?.localeCompare(a.capital));
  setFlag(flag => !flag);
};

export const sortPopulation = ({ data, flag, setFlag }) => {
  data.sort((a, b) => flag ? a.population - b.population : b.population - a.population);
  setFlag(flag => !flag);
};

export const sortPhoneСode = ({ data, flag, setFlag }) => {
  data.sort((a, b) => flag ? a.callingCodes - b.callingCodes : b.callingCodes - a.callingCodes);
  setFlag(flag => !flag);
};
