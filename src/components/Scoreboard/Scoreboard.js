import React from 'react';
import { GameLogicContext } from '../GameProvider';
import styles from './Scoreboard.module.css';
import GameSettings from '../GameSettings';
import Confetti from 'react-confetti-boom';



function Scoreboard() {

  const {score, highScore, celebration} = React.useContext(GameLogicContext);

  return (
  <div className={styles.wrapper}>
     <p>{ `Score: ${score}`}</p>

      {celebration === true && (
      <div className={styles.confettiWrapper}>
        <Confetti mode='boom' particleCount={100} shapeSize={12}  deg={272} spreadDeg={10} launchSpeed={1} colors={['#ff577f', '#ff884b', '#ffd384', '#fff9b0' ]} /> 
      </div>
      )}

      {highScore !== null && <p>{ `High Score: ${highScore}`}</p>}

    <GameSettings/>
  </div>);
}

export default Scoreboard;