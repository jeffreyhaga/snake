'use client';
import React from "react";
import styles from "./Square.module.css";

function Square({ children }) {

  let squareClass = styles.square;

  if (children === "head") {
    squareClass += ` ${styles.head}`;
  } else if (children === "body") {
    squareClass += ` ${styles.body}`;
  } else if (children === "food") {
    squareClass += ` ${styles.food}`
  }

  return <div className={squareClass}></div>;
}

export default Square;
