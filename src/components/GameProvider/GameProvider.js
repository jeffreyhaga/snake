"use client";
import React from "react";
import { INITIALSNAKE, INITIALSCORE } from "../../../constants";

export const GameLogicContext = React.createContext();

function GameProvider({ children }) {

  const [gameStatus, setGameStatus] = React.useState(null);

  const [board, setBoard] = React.useState(Array(200).fill(null));

  const [snake, setSnake] = React.useState(INITIALSNAKE);

  const [direction, setDirection] = React.useState(null);
 
  const [applePosition, setApplePosition] = React.useState(null);

  const [score, setScore] = React.useState(INITIALSCORE);

  const [highScore, setHighScore] = React.useState(null);

  const [showSettings, setShowSettings] = React.useState(false);

  const [difficulty, setDifficulty] = React.useState("easy");

  // getting local storage value after mount 
  React.useEffect(() => {
    const savedHighScoreValue = window.localStorage.getItem('high-score');
    if (savedHighScoreValue) {
      setHighScore(JSON.parse(savedHighScoreValue));
    }
  },[])

  // function to generate new apple
  const generateNewApple = (currentSnake) => {
    let newApple;
    do {
      newApple = Math.floor(Math.random() * 200);
    } while (currentSnake.includes(newApple));
    setApplePosition(newApple);
    return newApple;
  };

  // initializing new board on mount
  React.useEffect(() => {
    const initializeBoard = () => {
      const newBoard = Array(200).fill(null);
      // Place snake
      INITIALSNAKE.forEach((position, index) => {
        newBoard[position] = index === 0 ? "head" : "body";
      });
      
      // Generate and place initial apple
      const apple = generateNewApple(snake);
      newBoard[apple] = "food";
      
      setBoard(newBoard);
      setGameStatus("ready");
    };

    initializeBoard();
  }, []); 

   // Update direction based on arrow keys
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameStatus === 'lost') {
        return;
      }

      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction, gameStatus]);

  // Main game loop
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake];
        const head = newSnake[0];

        // Calculate new head position based on direction
        let newHead;
        switch (direction) {
          case "UP":
            newHead = head - 20;
            break;
          case "DOWN":
            newHead = head + 20;
            break;
          case "LEFT":
            newHead = head - 1;
            break;
          case "RIGHT":
            newHead = head + 1;
            break;
          default:
            return newSnake;
        }

        // Check for wall collisions
        if (
          newHead < 0 ||
          newHead >= 200 ||
          (direction === "RIGHT" && head % 20 === 19) ||
          (direction === "LEFT" && head % 20 === 0) ||
          newSnake.slice(0, -1).includes(newHead)
        ) {
          setGameStatus("lost");

          if (score === null || score > highScore) {
            const newHighScore = score;
            setHighScore(newHighScore);
            window.localStorage.setItem('high-score', JSON.stringify(newHighScore));
          }

          return prevSnake;
        }

        // Add new head
        newSnake.unshift(newHead);
        
        // Check if snake ate the apple
        if (newHead === applePosition) {
          // Don't remove tail (snake grows)
          setScore(prevScore => prevScore + 1); // Increment score
          generateNewApple(newSnake); // Generate new apple
        } else {
          // Remove tail if apple wasn't eaten
          newSnake.pop();
        }

        // Update the board
        const newBoard = Array(200).fill(null);
        newSnake.forEach((pos, index) => {
          newBoard[pos] = index === 0 ? "head" : "body";
        });
        // Place apple on board
        newBoard[applePosition] = "food";
        setBoard(newBoard);

        return newSnake;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [direction, applePosition, gameStatus]);

  // reset game function
  const resetGame = React.useCallback(() => {


    setGameStatus("ready");
    setSnake(INITIALSNAKE);
    setScore(INITIALSCORE);
    setDirection(null);
    
    // Reset board with initial snake
    const newBoard = Array(200).fill(null);
    INITIALSNAKE.forEach((position, index) => {
      newBoard[position] = index === 0 ? "head" : "body";
    });
    
    // Generate new apple
    const apple = Math.floor(Math.random() * 200);
    newBoard[apple] = "food";
    setApplePosition(apple);
    setBoard(newBoard);
  }, []);

  function handleToggleSettings(event) {
    event.preventDefault();
    setShowSettings(!showSettings);
  }

  return (
    <GameLogicContext.Provider value={{ board, score, highScore, snake, gameStatus, setGameStatus, resetGame, showSettings, handleToggleSettings, difficulty, setDifficulty }}>
      {children}
    </GameLogicContext.Provider>
  );
}

export default GameProvider;