import React, { FC } from "react";
import cl from "./Modal.module.css";
import cn from "classnames";

interface ModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
  restartGame: () => void;
}

export const Modal: FC<ModalProps> = ({ active, setActive, restartGame }) => {
  const onClick = (e: any) => {
    e.preventDefault();
    restartGame();
    setActive(false);
  };
  return (
    <div className={cn(cl.modal, active && cl.modalActive)}>
      <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClick}>Новая Игра</button>
      </div>
    </div>
  );
};
