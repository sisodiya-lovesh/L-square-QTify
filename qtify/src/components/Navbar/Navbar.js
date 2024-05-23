import React from 'react';
import styles from './Navbar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Qtify Logo" className={styles.logo} />
      <SearchBar />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default Navbar;
