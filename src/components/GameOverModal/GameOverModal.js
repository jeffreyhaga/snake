import React from 'react';
import Modal from '../Modal';
import { GameLogicContext } from '../GameProvider';
import styles from '../Modal/Modal.module.css';


function GameOverModal() {

  const {resetGame, score} = React.useContext(GameLogicContext);

  return (
    <Modal>
      <p className={styles.text}>{`Game Over. Your score is ${score}`} </p> 
      <button className={styles.button} onClick={resetGame}>Play Again</button>
    </Modal>
  )
  
}

export default GameOverModal;
