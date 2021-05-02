import styles from './thead.module.scss';
import {
  sortCountry,
  sortCapital,
  sortPopulation,
  sortPhoneСode,
} from './SortFunction/index';

const Thead = ({ data, flag, setFlag }) => {
  console.log(data);
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
          onClick={() => sortPhoneСode({ data, flag, setFlag })}
        >
          Phone code
        </th>
      </tr>
    </thead>
  );
};

export default Thead;
