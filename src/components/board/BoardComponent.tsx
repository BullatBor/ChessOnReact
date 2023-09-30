import React, { FC, useState, useEffect } from "react";
import cl from "./Board.module.css";
import { Board } from "../../models/Board";
import { CellComponent } from "./CellComponent";
import { Cell } from "../../models/Cell";
import { Player } from "../../models/Player";

interface BoardProps {
  board: Board;
  currentPlayer: Player | null;
  setBoard: (board: Board) => void;
  swapPlayer: () => void;
}

export const BoardComponent: FC<BoardProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const [cellSelected, setCellSelected] = useState<Cell | null>(null);

  const clickCell = (cell: Cell) => {
    if (
      cellSelected &&
      cellSelected !== cell &&
      cellSelected.figure?.canMove(cell) &&
      !cellSelected.figure?.checkmate(cell)
    ) {
      let backCell = cellSelected;
      const newBoard = board.getCopyBoard();
      if (board.checkmate()) {
        cellSelected.moveFigure(cell);
        UpdateBoard();
        if (board.checkmate()) {
          cell.moveFigure(cellSelected);
          setCellSelected(null);
          debugger;
        } else {
          swapPlayer();
          debugger;
        }
      } else {
        cellSelected.moveFigure(cell);
        setCellSelected(null);
        swapPlayer();
        UpdateBoard();
      }
    } else if (cell.figure) {
      if (cell.figure?.color === currentPlayer?.color) {
        setCellSelected(cell);
      }
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
