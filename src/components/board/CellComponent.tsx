import React, { FC } from "react";
import { Cell } from "../../models/Cell";
import cl from "./Board.module.css";
import cn from "classnames";

export const CellComponent: FC<CellProps> = ({ cell }) => {
  let classCell = cell.color;
  return (
    <div className={cn(cl.cell, cl[classCell])}>
      {cell.figure?.logo && <img src={cell.figure.logo} alt="Figure" />}
    </div>
  );
};

interface CellProps {
  cell: Cell;
}
