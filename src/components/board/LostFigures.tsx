import React, { FC } from "react";
import { Figure } from "../../models/figures/Figures";
import cl from "./Board.module.css";

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

export const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className={cl.lostFigures}>
      <h3>{title}</h3>
      <div className={cl.figuresList}>
        {figures.map((figure) => (
          <div key={figure.id}>
            {figure.name}{" "}
            {figure.logo && <img width={20} height={20} src={figure.logo} />}
          </div>
        ))}
      </div>
    </div>
  );
};
