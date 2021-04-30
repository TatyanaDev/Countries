import styles from './table.module.scss';

const Table = ({ data, flag, setFlag, searchTerm }) => {
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
    <table className={styles.container}>
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
      <tbody>
        {data
          .filter(country => {
            if (searchTerm === '') {
              return country;
            } else if (
              country.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0
            ) {
              return country;
            }
          })
          .map((country, index) => {
            return (
              <>
                <tr key={index}>
                  <td className={styles.colName}>{country.name}</td>
                  <td className={styles.colCapital}>{country.capital}</td>
                  <td className={styles.colPopulation}>{country.population}</td>
                  <td className={styles.colCallingCodes}>
                    {country.callingCodes}
                  </td>
                </tr>
              </>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
