import React, { useState, useEffect } from "react";
import "./App.css";
import { BoardComponent } from "./components/board/BoardComponent";
import { Board } from "./models/Board";

function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restartBoard();
  }, []);

  function restartBoard() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigure();
    setBoard(newBoard);
  }
  return (
    <div className="App">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
