import { useState, useEffect } from 'react';
import styles from './inputSearch.module.scss';

const InputSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <input
      value={searchTerm}
      className={styles.input}
      type='text'
      placeholder='Search...'
      onChange={e => {
        setSearchTerm(e.target.value);
      }}
    />
  );
};

export default InputSearch;
