import styles from "./table.module.scss";
import Thead from "./Thead";
import Tbody from "./Tbody";

export default function Table({ data, flag, setFlag, searchTerm }) {
  return (
    <table className={styles.container}>
      <Thead data={data} flag={flag} setFlag={setFlag} />
      <Tbody data={data} searchTerm={searchTerm} />
    </table>
  );
}
