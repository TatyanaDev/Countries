import { useState, useEffect } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import styles from './index.module.scss';

function App () {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then(data => {
        setData(data);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error) return 'Error!';

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

  const filter = () => {
    setData();
  };

  return (
    <div>
      {loading ? (
        <div className={styles.containerSkeleton}>
          <Skeleton variant='text' height={36} />
          <Skeleton variant='text' height={36} />
          <Skeleton variant='text' height={36} />
          <Skeleton variant='text' height={36} />
          <Skeleton variant='text' height={36} />
          <Skeleton variant='text' height={36} />
          <Skeleton variant='text' height={36} />
          <Skeleton variant='text' height={36} />
          <Skeleton variant='text' height={36} />
          <Skeleton variant='text' height={36} />
        </div>
      ) : (
        <table className={styles.container}>
          <thead>
            <tr>
              <th className={styles.colTh} onClick={sortCountry}>
                Country
              </th>
              <th className={styles.colTh} onClick={sortCapital}>
                Capital
              </th>
              <th className={styles.colTh} onClick={sortPopulation}>
                Population
              </th>
              <th className={styles.colTh} onClick={sortPhoneСode}>
                Phone code
              </th>
            </tr>
          </thead>
          <tbody>
            <input
              type='text'
              placeholder='Search...'
              onChange={event => {
                setSearchTerm(event.target.value);
              }}
            />
            {data
              .filter(country => {
                if (searchTerm === '') {
                  return country;
                } else if (
                  country.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return country;
                }
              })
              .map((country, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td className={styles.colTb}>{country.name}</td>
                      <td className={styles.colTb}>{country.capital}</td>
                      <td className={styles.colTb}>{country.population}</td>
                      <td className={styles.colTb}>{country.callingCodes}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
