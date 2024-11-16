"use client";

import React from "react";
import styles from "./GameBoard.module.css";
import Square from "../Square";
import Scoreboard from "../Scoreboard";
import GameOverModal from "../GameOverModal";
import SettingsModal from "../SettingsModal";
import { GameLogicContext } from "../GameProvider";


function GameBoard() {
  const { board, gameStatus, showSettings } = React.useContext(GameLogicContext);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Snake</h1>
      <Scoreboard/>
      {gameStatus === 'lost' && <GameOverModal />}
      {showSettings && (<SettingsModal />)}
      <div className={styles.grid}>
        {board.map((square, index) => (
          <Square key={index}>{square}</Square>
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
