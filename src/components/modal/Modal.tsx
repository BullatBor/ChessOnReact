import React, { FC } from "react";
import cl from "./Modal.module.css";
import cn from "classnames";
import { Board } from "../../models/Board";
import { Colors } from "../../models/Colors";
import WhiteCrown from "../../assets/WhiteCrown.jpeg";
import BlackCrown from "../../assets/BlackCrown.jpeg";
import Background from "../../assets/GameOver.jpg";

interface ModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
  restartGame: () => void;
  board: Board;
}

export const Modal: FC<ModalProps> = ({
  active,
  setActive,
  restartGame,
  board,
}) => {
  const onClick = (e: any) => {
    e.preventDefault();
    restartGame();
    setActive(false);
  };
  return (
    <div className={cn(cl.modal, active && cl.modalActive)}>
      <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
        {board.winner === Colors.WHITE && (
          <>
            <img src={WhiteCrown} />
            <h2>Выйграли Белые</h2>
          </>
        )}
        {board.winner === Colors.BLACK && (
          <>
            <img src={BlackCrown} />
            <h2>Выйграли Черные</h2>
          </>
        )}
        <button onClick={onClick}>Новая Игра</button>
      </div>
    </div>
  );
};
