import React from 'react';
import { GameLogicContext } from '../GameProvider';
import styles from './Scoreboard.module.css';
import GameSettings from '../GameSettings';
import Confetti from 'react-confetti-boom';
import DarkLightToggle from '../DarkLightToggle';



function Scoreboard() {

  const {score, highScore, celebration} = React.useContext(GameLogicContext);

  return (
  <div className={styles.wrapper}>
     <p className={styles.scores}>{ `Score: ${score}`}</p>

      {celebration === true && (
      <div className={styles.confettiWrapper}>
        <Confetti mode='boom' particleCount={300} shapeSize={12}  deg={272} spreadDeg={14} launchSpeed={0.75} colors={['#ff577f', '#ff884b', '#ffd384', '#fff9b0' ]} /> 
      </div>
      )}

      {highScore !== null && <p className={styles.scores}>{ `High Score: ${highScore}`}</p>}

    <GameSettings/>
    <DarkLightToggle/>
  </div>);
}

export default Scoreboard;