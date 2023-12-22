import styles from "./tbodyItem.module.scss";

export default function TbodyItem({ country }) {
  return (
    <tr>
      <td className={styles.colName}>{country.name}</td>
      <td className={styles.colCapital}>{country.capital}</td>
      <td className={styles.colPopulation}>{country.population}</td>
      <td className={styles.colCallingCodes}>{country.callingCodes}</td>
    </tr>
  );
}
