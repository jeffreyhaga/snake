import React from 'react';
import { GameLogicContext } from '../GameProvider';
import styles from './Scoreboard.module.css';
import GameSettings from '../GameSettings';



function Scoreboard() {

  const {score, highScore} = React.useContext(GameLogicContext);

  return (
  <div className={styles.wrapper}>
     <p>{ `Score: ${score}`}</p>

     {highScore !== null && <p>{ `High Score: ${highScore}`}</p>}
    <GameSettings/>
  </div>);
}

export default Scoreboard;
