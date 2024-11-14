import React from "react";
import styles from "./page.module.css";

import GameBoard from "@/components/GameBoard";
import GameProvider from "@/components/GameProvider";

export default function Home() {
  return (
    <div className={styles.page}>
      <GameProvider>
        <GameBoard />
      </GameProvider>
    </div>
  );
}
