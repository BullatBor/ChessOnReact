import React, { useState, useEffect } from "react";
import "./App.css";
import { BoardComponent } from "./components/board/BoardComponent";
import { LostFigures } from "./components/board/LostFigures";
import { Timer } from "./components/board/Timer";
import { Modal } from "./components/modal/Modal";
import { Board } from "./models/Board";
import { Colors } from "./models/Colors";
import { Player } from "./models/Player";

function App() {
  const [board, setBoard] = useState(new Board());
  const [isGameOver, setIsGameOver] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [WhiteTime, setWhiteTime] = useState(300);
  const [BlackTime, setBlackTime] = useState(3);

  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  useEffect(() => {
    restartBoard();
    setCurrentPlayer(whitePlayer);
  }, []);

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  }

  function restartBoard() {
    setActiveModal(false);
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigure();
    newBoard.gameOver(null);
    setCurrentPlayer(whitePlayer);
    setBlackTime(300);
    setWhiteTime(300);
    setBoard(newBoard);
  }
  return (
    <div className="App">
      <Timer
        restart={restartBoard}
        currentPlayer={currentPlayer}
        setBoard={setBoard}
        setActiveModal={setActiveModal}
        setWhiteTime={setWhiteTime}
        setBlackTime={setBlackTime}
        WhiteTime={WhiteTime}
        BlackTime={BlackTime}
        activeModal={activeModal}
      />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
        setActiveModal={setActiveModal}
      />
      <div>
        <LostFigures title="Черные фигуры" figures={board.lostBlackFigures} />
        <LostFigures title="Белые фигуры" figures={board.lostWhiteFigures} />
      </div>
      <Modal
        active={activeModal}
        setActive={setActiveModal}
        restartGame={restartBoard}
        board={board}
      />
    </div>
  );
}

export default App;
