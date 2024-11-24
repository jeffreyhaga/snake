"use client";

import React from "react";
import styles from "./GameBoard.module.css";
import Square from "../Square";
import Scoreboard from "../Scoreboard";
import GameOverModal from "../GameOverModal";
import SettingsModal from "../SettingsModal";
import { GameLogicContext } from "../GameProvider";
import { pixelifySans } from '../../app/fonts/fonts';

function GameBoard() {
  const { board, gameStatus, showSettings, showModal, setShowModal, handleClose } = React.useContext(GameLogicContext);

  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.title} ${pixelifySans.className}`}>Snake</h1>
      <Scoreboard/>
      {gameStatus === 'lost' && showModal && <GameOverModal onClose={handleClose} />}
      {showSettings && showModal && (<SettingsModal onClose={handleClose} />)}
      <div className={styles.grid}>
        {board.map((square, index) => (
          <Square key={index}>{square}</Square>
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
