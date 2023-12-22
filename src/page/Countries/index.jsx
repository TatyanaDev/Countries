import { useState, useEffect, useCallback } from "react";
import SkeletonSearch from "components/SearchCountry/SkeletonSearch";
import SkeletonTable from "components/TableCountry/SkeletonTable";
import InputSearch from "components/SearchCountry/InputSearch";
import Table from "components/TableCountry/Table";

export default function Countries() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState([]);

  const onChangeInput = useCallback((e) => setSearchTerm(e.target.value), []);

  useEffect(
    () =>
      fetch("https://restcountries.com/v2/all")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => {
          console.error("Error fetching data:", err);
          setError(err);
        })
        .finally(() => setLoading(false)),
    []
  );

  if (error) {
    return "Error!";
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
