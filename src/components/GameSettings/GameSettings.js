import React from 'react';
import { Settings } from 'react-feather';
import { GameLogicContext } from '../GameProvider';
import styles from './GameSettings.module.css';

function GameSettings() {

  const {handleToggleSettings} = React.useContext(GameLogicContext);

  return (
    <button className={styles.wrapper}>
      <Settings size={22} onClick={handleToggleSettings} className={styles.icon}></Settings>
    </button>
  );
}

export default GameSettings;
