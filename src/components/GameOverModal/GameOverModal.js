import React from 'react';
import Modal from '../Modal';
import { GameLogicContext } from '../GameProvider';
import styles from '../Modal/Modal.module.css';


function GameOverModal({onClose}) {

  const {resetGame, score} = React.useContext(GameLogicContext);

  const handlePlayAgain = () => {
    resetGame();
    onClose();
  }

  return (
    <Modal onClose={resetGame}>
      <p className={styles.title}>{`Game Over`} </p>
      <p className={styles.text}>{`Your score is ${score}`} </p> 
      <button className={styles.button} onClick={handlePlayAgain}>Play Again</button>
    </Modal>
  )
  
}

export default GameOverModal;
