import styles from "./inputSearch.module.scss";

export default function InputSearch({ value, onChange }) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  );
}
