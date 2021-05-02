import styles from './table.module.scss';
import Thead from './Thead';
import TbodyFunction from './TbodyFunction';

const Table = ({ data, flag, setFlag, searchTerm }) => {
  return (
    <table className={styles.container}>
      <Thead data={data} flag={flag} setFlag={setFlag} />
      <TbodyFunction data={data} searchTerm={searchTerm} />
    </table>
  );
};

export default Table;
