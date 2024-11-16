import React from "react";
import styles from "../components/GameBoard/GameBoard.module.css";


export default function Loading() {
    
    return (
      <div className={styles.page}>
        <h1 className={styles.title}>Loading...</h1>
      </div>
    );
  }