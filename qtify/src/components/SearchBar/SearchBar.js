import React from 'react';
import styles from './SearchBar.module.css';
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg'

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search a song of your choice"
        className={styles.input}
      />
      <button className={styles.button}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchBar;
