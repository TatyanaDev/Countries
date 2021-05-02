import styles from './tbody.module.scss';

const Tbody = ({index,country}) => {
  return (
    <tr key={index}>
    <td className={styles.colName}>{country.name}</td>
    <td className={styles.colCapital}>{country.capital}</td>
    <td className={styles.colPopulation}>{country.population}</td>
    <td className={styles.colCallingCodes}>{country.callingCodes}</td>
  </tr>
  );
};

export default  Tbody;