import React, { FC, useState, useEffect } from "react";
import cl from "./Board.module.css";
import { Board } from "../../models/Board";
import { CellComponent } from "./CellComponent";
import { Cell } from "../../models/Cell";
import { Player } from "../../models/Player";
import lodash from "lodash";

interface BoardProps {
  board: Board;
  currentPlayer: Player | null;
  setBoard: (board: Board) => void;
  swapPlayer: () => void;
  setActiveModal: (winner: boolean) => void;
  listMoves: Board[];
  setListMoves: (newBoard: Board[]) => void;
}

export const BoardComponent: FC<BoardProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
  setActiveModal,
  listMoves,
  setListMoves,
}) => {
  const [cellSelected, setCellSelected] = useState<Cell | null>(null);

  const saveMove = (board: Board) => {
    const newBoard = lodash.cloneDeep(board);
    const newListMoves = [...listMoves, newBoard];
    if (listMoves.length > 5) {
      newListMoves.shift(); // Удаляем первый элемент массива
    }
    return newListMoves;
  };

  const draw = () => {
    let newBoard = new Board();
    newBoard.gameOver("DRAW");
    newBoard.initCells();
    newBoard.addFigure();
    setTimeout(() => {
      setActiveModal(true);
      setBoard(newBoard);
    }, 2000);
  };

  const clickCell = (cell: Cell) => {
    if (
      cellSelected &&
      cellSelected !== cell &&
      cellSelected.figure?.canMove(cell) &&
      !cellSelected.figure?.checkmate(cell)
    ) {
      let newBoard = board.getCopyBoard();
      cellSelected.moveFigure(cell);
      if (board.checkmate()) {
        let king = board.KingsUnderAttack;
        if (king.length === 2) draw();
        if (king[0].color !== currentPlayer?.color) {
          setListMoves(saveMove(newBoard));
          swapPlayer();
        } else {
          let newDeepBoard = lodash.cloneDeep(listMoves[listMoves.length - 1]);
          setBoard(newDeepBoard);
          setCellSelected(null);
        }
      } else {
        setListMoves(saveMove(newBoard));
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
