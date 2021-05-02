import { useState, useEffect, useCallback } from 'react';
import SkeletonSearch from 'components/SearchCountry/SkeletonSearch';
import InputSearch from 'components/SearchCountry/InputSearch';
import SkeletonTable from 'components/TableCountry/SkeletonTable';
import Table from 'components/TableCountry/Table';

function Country () {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const onChangeInput = useCallback(e => {
    setSearchTerm(e.target.value);
  }, []);

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

  return (
    <>
      {loading ? (
        <SkeletonSearch />
      ) : (
        <InputSearch value={searchTerm} onChange={onChangeInput} />
      )}
      {loading ? (
        <SkeletonTable />
      ) : (
        <Table
          data={data}
          flag={flag}
          setFlag={setFlag}
          searchTerm={searchTerm}
        />
      )}
    </>
  );
}

export default Country;
