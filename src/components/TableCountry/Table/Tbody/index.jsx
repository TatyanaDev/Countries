import styles from './tbody.module.scss';

const Tbody = ({ data, searchTerm }) => {
  return (
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
            <tr key={index}>
              <td className={styles.colName}>{country.name}</td>
              <td className={styles.colCapital}>{country.capital}</td>
              <td className={styles.colPopulation}>{country.population}</td>
              <td className={styles.colCallingCodes}>{country.callingCodes}</td>
            </tr>
          );
        })}
    </tbody>
  );
};

export default Tbody;
