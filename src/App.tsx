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
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigure();
    newBoard.gameOver(null);
    setCurrentPlayer(whitePlayer);
    setBoard(newBoard);
  }
  return (
    <div className="App">
      <Timer
        restart={restartBoard}
        currentPlayer={currentPlayer}
        board={board}
        setBoard={setBoard}
        gameOver={setActiveModal}
      />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures title="Черные фигуры" figures={board.lostBlackFigures} />
        <LostFigures title="Белые фигуры" figures={board.lostWhiteFigures} />
      </div>
      <Modal
        active={activeModal}
        setActive={setActiveModal}
        restartGame={restartBoard}
      />
    </div>
  );
}

export default App;
