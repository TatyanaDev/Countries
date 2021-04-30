import styles from './table.module.scss';
import Thead from './Thead/index';

const Table = ({ data, flag, setFlag, searchTerm }) => {
  return (
    <table className={styles.container}>
      <Thead data={data} flag={flag} setFlag={setFlag}/>
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
