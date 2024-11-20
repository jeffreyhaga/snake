'use client';
import React from 'react';
import {Sun, Moon} from 'react-feather';
import styles from './DarkLightToggle.module.css';
import { ThemeContext } from '../ThemeProvider';

function DarkLightToggle() {

  const {theme, toggleTheme} = React.useContext(ThemeContext);

  // function handleClick() {
  //   const nextTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(nextTheme);
  // }

  return (
    <button onClick={toggleTheme} className={styles.wrapper}>
      {theme === 'light' ? (
        <Sun size={22} className={styles.icon}/>
      ) : (
        <Moon size={22} className={styles.icon}/>
      )}
    </button>
  );
}

export default DarkLightToggle;
