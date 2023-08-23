import React, { FC, useRef, useState, useEffect } from "react";
import { Board } from "../../models/Board";
import { Colors } from "../../models/Colors";
import { Player } from "../../models/Player";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
  board: Board;
  gameOver: (winner: boolean) => void;
  setBoard: (board: Board) => void;
}

export const Timer: FC<TimerProps> = ({
  currentPlayer,
  restart,
  board,
  gameOver,
}) => {
  const [BlackTime, setBlackTime] = useState(3);
  let isGameOver = false;
  const [WhiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  useEffect(() => {
    setBlackTime(300);
    setWhiteTime(300);
  }, [board.winner]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }

    if (timer.current && isGameOver) {
      clearInterval(timer.current);
    }

    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTime
        : decrementBlackTime;
    timer.current = setInterval(callback, 1000);
  }

  function decrementWhiteTime() {
    setWhiteTime((prev) => {
      const updatedBlackTime = prev - 1;
      if (updatedBlackTime === 0) {
        isGameOver = true;
        let newBoard = new Board();
        newBoard.gameOver(Colors.BLACK);
        return prev;
      }
      return updatedBlackTime;
    });
    isGameOver && gameOver(true);
  }

  function decrementBlackTime() {
    setBlackTime((prev) => {
      const updatedBlackTime = prev - 1;
      if (updatedBlackTime === 0) {
        isGameOver = true;
        let newBoard = new Board();
        newBoard.gameOver(Colors.WHITE);
        return prev;
      }
      return updatedBlackTime; // обязательно верни обновленное значение
    });
    isGameOver && gameOver(true);
  }

  const handlerRestart = () => {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  };

  return (
    <div>
      <div>
        <button onClick={handlerRestart}>Restart Game</button>
      </div>
      <h2>Черные - {BlackTime}</h2>
      <h2>Белые - {WhiteTime}</h2>
    </div>
  );
};
