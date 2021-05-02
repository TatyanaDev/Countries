import SkeletonSearch from 'components/SearchCountry/SkeletonSearch';
import InputSearch from 'components/SearchCountry/InputSearch';
import SkeletonTable from 'components/TableCountry/SkeletonTable';
import Table from 'components/TableCountry/Table';

const Country = ({
  loading,
  searchTerm,
  onChangeInput,
  data,
  flag,
  setFlag,
}) => {
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
};

export default Country;
