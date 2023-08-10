import React, { FC } from "react";
import { Cell } from "../../models/Cell";
import cl from "./Board.module.css";
import cn from "classnames";

export const CellComponent: FC<CellProps> = ({ cell, selected, clickCell }) => {
  let classCell = cell.color;
  return (
    <div
      className={cn(cl.cell, cl[classCell], selected ? cl.selected : "")}
      onClick={() => clickCell(cell)}
      style={{ background: cell.availabel && cell.figure ? "green" : "" }}
    >
      {cell.availabel && !cell.figure && <div className={cl.available}></div>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="Figure" />}
    </div>
  );
};

interface CellProps {
  cell: Cell;
  selected: boolean;
  clickCell: (cell: Cell) => void;
}
