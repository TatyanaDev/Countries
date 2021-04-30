import styles from './table.module.scss';
import Thead from './Thead/index';
import Tbody from './Tbody/index';

const Table = ({ data, flag, setFlag, searchTerm }) => {
  return (
    <table className={styles.container}>
      <Thead data={data} flag={flag} setFlag={setFlag} />
      <Tbody data={data} searchTerm={searchTerm} />
    </table>
  );
};

export default Table;
