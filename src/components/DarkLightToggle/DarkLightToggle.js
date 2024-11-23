'use client';
import React from 'react';
import {Sun, Moon} from 'react-feather';
import styles from './DarkLightToggle.module.css';
import { ThemeContext } from '../ThemeProvider';
import { motion, AnimatePresence } from 'motion/react';


function DarkLightToggle() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  // Animation variants for sliding the icons
  const variants = {
    initial: (direction) => ({
      y: direction > 0 ? 15 : -15, 
      opacity: 0,
    }),
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 20
      }
    },
    exit: (direction) => ({
      y: direction < 0 ? 15 : -15, 
      opacity: 0,
      transition: { duration: 0.15 }
    })
  };

  // Determine the direction of the slide based on theme
  const direction = theme === 'light' ? 1 : -1;

  return (
    <motion.button
      onClick={toggleTheme}
      className={styles.wrapper}
    >
      <AnimatePresence mode="wait" custom={direction}>
        {theme === 'light' ? (
          <motion.div
            key="sun"
            custom={1} 
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Sun size={22} className={styles.icon}/>
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            custom={-1} 
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Moon size={22} className={styles.icon}/>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default DarkLightToggle;