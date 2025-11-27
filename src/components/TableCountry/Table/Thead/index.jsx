import {
  sortByCountry,
  sortByCapital,
  sortByPopulation,
} from "./utils/sort-functions";
import styles from "./thead.module.scss";

export default function Thead({ data, flag, setFlag }) {
  return (
    <thead>
      <tr className={styles.tr}>
        <th
          className={styles.colName}
          onClick={() => sortByCountry({ data, flag, setFlag })}
        >
          Country
        </th>
        <th
          className={styles.colCapital}
          onClick={() => sortByCapital({ data, flag, setFlag })}
        >
          Capital
        </th>
        <th
          className={styles.colPopulation}
          onClick={() => sortByPopulation({ data, flag, setFlag })}
        >
          Population
        </th>
      </tr>
    </thead>
  );
}
