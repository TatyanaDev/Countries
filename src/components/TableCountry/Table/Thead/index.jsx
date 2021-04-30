import styles from './thead.module.scss';

const Thead = ({ data, flag, setFlag }) => {

  const sortCountry = () => {
    data.sort((a, b) => [
      flag ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
    ]);
    setFlag(flag => !flag);
  };

  const sortCapital = () => {
    data.sort((a, b) => [
      flag
        ? a.capital.localeCompare(b.capital)
        : b.capital.localeCompare(a.capital),
    ]);
    setFlag(flag => !flag);
  };

  const sortPopulation = () => {
    data.sort((a, b) => [
      flag ? a.population - b.population : b.population - a.population,
    ]);
    setFlag(flag => !flag);
  };

  const sortPhoneСode = () => {
    data.sort((a, b) => [
      flag ? a.callingCodes - b.callingCodes : b.callingCodes - a.callingCodes,
    ]);
    setFlag(flag => !flag);
  };

  return (
    <thead>
      <tr className={styles.tr}>
        <th className={styles.colName} onClick={sortCountry}>
          Country
        </th>
        <th className={styles.colCapital} onClick={sortCapital}>
          Capital
        </th>
        <th className={styles.colPopulation} onClick={sortPopulation}>
          Population
        </th>
        <th className={styles.colCallingCodes} onClick={sortPhoneСode}>
          Phone code
        </th>
      </tr>
    </thead>
  );
};

export default Thead;
