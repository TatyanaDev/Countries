import {
  sortCountry,
  sortCapital,
  sortPopulation,
  sortPhoneCode,
} from "./utils/sort-functions";
import styles from "./thead.module.scss";

export default function Thead({ data, flag, setFlag }) {
  return (
    <thead>
      <tr className={styles.tr}>
        <th
          className={styles.colName}
          onClick={() => sortCountry({ data, flag, setFlag })}
        >
          Country
        </th>
        <th
          className={styles.colCapital}
          onClick={() => sortCapital({ data, flag, setFlag })}
        >
          Capital
        </th>
        <th
          className={styles.colPopulation}
          onClick={() => sortPopulation({ data, flag, setFlag })}
        >
          Population
        </th>
        <th
          className={styles.colCallingCodes}
          onClick={() => sortPhoneCode({ data, flag, setFlag })}
        >
          Phone code
        </th>
      </tr>
    </thead>
  );
}
