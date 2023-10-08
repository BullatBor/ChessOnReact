import React, { FC, useRef, useState, useEffect } from "react";
import { Board } from "../../models/Board";
import { Colors } from "../../models/Colors";
import { Player } from "../../models/Player";
import cl from "./Board.module.css";
import lodash from "lodash";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
  setActiveModal: (winner: boolean) => void;
  setBoard: (board: Board) => void;
  setBlackTime: (time: any) => void;
  setWhiteTime: (time: any) => void;
  WhiteTime: number;
  BlackTime: number;
  activeModal: boolean;
  listMoves: Board[];
  setListMoves: (newBoard: Board[]) => void;
}

export const Timer: FC<TimerProps> = ({
  currentPlayer,
  restart,
  setActiveModal,
  setBoard,
  setWhiteTime,
  setBlackTime,
  WhiteTime,
  BlackTime,
  activeModal,
  listMoves,
  setListMoves,
}) => {
  let isGameOver = false;
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);
  const [countBack, setCountBack] = useState<number>(5);

  useEffect(() => {
    startTimer();
  }, [currentPlayer, activeModal]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTime
        : decrementBlackTime;
    timer.current = setInterval(callback, 1000);
  }

  const EndGame = (winner: Colors) => {
    isGameOver = true;
    if (timer.current && isGameOver) {
      clearInterval(timer.current);
    }
    isGameOver && setActiveModal(true);
    let newBoard = new Board();
    newBoard.gameOver(winner === Colors.WHITE ? Colors.WHITE : Colors.BLACK);
    newBoard.initCells();
    newBoard.addFigure();
    setBoard(newBoard);
  };

  function decrementWhiteTime() {
    setWhiteTime((prev: number) => {
      const updatedBlackTime = prev - 1;
      if (updatedBlackTime === 0) {
        EndGame(Colors.BLACK);
        return prev;
      }
      return updatedBlackTime;
    });
  }

  function decrementBlackTime() {
    setBlackTime((prev: number) => {
      const updatedBlackTime = prev - 1;
      if (updatedBlackTime === 0) {
        EndGame(Colors.WHITE);
        return prev;
      }
      return updatedBlackTime;
    });
  }

  const handlerRestart = () => {
    restart();
  };

  const handlerBack = () => {
    if (countBack > 0 && listMoves.length > 2) {
      listMoves.pop();
      let newBoard = listMoves[listMoves.length - 1];
      //let newBoard = listMoves[listMoves.length - 2];
      /*
      let newList = lodash.cloneDeep(
        listMoves.filter((board) => board !== newBoard)
      );*/
      newBoard = lodash.cloneDeep(newBoard);
      setListMoves(listMoves);
      setBoard(newBoard);
    }
  };

  return (
    <div className={cl.TimerPanel}>
      <div className={cl.RestartBtn}>
        <button onClick={handlerRestart}>Restart Game</button>
      </div>
      <h2>Черные - {BlackTime}</h2>
      <h2>Белые - {WhiteTime}</h2>
      <div>
        <button onClick={handlerBack}>Вернуть 1 ход</button>
      </div>
    </div>
  );
};
