import React, { FC, useState, useEffect } from "react";
import cl from "./Board.module.css";
import { Board } from "../../models/Board";
import { CellComponent } from "./CellComponent";
import { Cell } from "../../models/Cell";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

export const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  const [cellSelected, setCellSelected] = useState<Cell | null>(null);

  const clickCell = (cell: Cell) => {
    if (
      cellSelected &&
      cellSelected !== cell &&
      cellSelected.figure?.canMove(cell)
    ) {
      cellSelected.moveFigure(cell);
      setCellSelected(null);
      UpdateBoard();
    } else if (cell.figure) {
      setCellSelected(cell);
    }
  };

  useEffect(() => {
    highlightCells();
  }, [cellSelected]);

  function highlightCells() {
    board.highlightCells(cellSelected);
    UpdateBoard();
  }

  function UpdateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className={cl.board}>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              cell={cell}
              key={cell.id}
              selected={
                cell.x === cellSelected?.x && cell.y === cellSelected?.y
              }
              clickCell={clickCell}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
