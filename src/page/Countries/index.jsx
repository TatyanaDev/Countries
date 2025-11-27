import { useState, useEffect, useCallback } from "react";
import SkeletonSearch from "components/SearchCountry/SkeletonSearch";
import SkeletonTable from "components/TableCountry/SkeletonTable";
import InputSearch from "components/SearchCountry/InputSearch";
import Table from "components/TableCountry/Table";

export default function Countries() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState([]);

  const onChangeInput = useCallback(
    ({ target: { value } }) => setSearchTerm(value),
    []
  );

  useEffect(() => {
    setLoading(true);

    fetch("https://restcountries.com/v3.1/all?fields=name,capital,population")
      .then((res) => res.json())
      .then((data) => {
        const preparedData = data.map((country) => ({
          ...country,
          name: country.name.common,
          capital: country.capital[0],
        }));

        setData(preparedData);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return "Failed to load data. Please try again later.";
  }

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
