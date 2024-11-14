import React from "react";
import styles from "../components/GameBoard/GameBoard.module.css";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <h1 className={styles.title}>Loading...</h1>
  }