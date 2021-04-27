import React from 'react';
import styles from './inputSearch.module.scss';

const InputSearch = ({ value, onChange }) => {
  return (
    <input
      className={styles.input}
      type='text'
      placeholder='Search...'
      value={value}
      onChange={onChange}
    />
  );
};

export default InputSearch;
