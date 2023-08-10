import { Cell } from "../Cell";
import { Colors } from "../Colors";
import blackFigure from "../../assets/black-king.png";
import whiteFigure from "../../assets/white-king.png";
import { Figure, FigureNames } from "./Figures";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackFigure : whiteFigure;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);
    return (
      (dx === 1 && dy === 1) || (dx === 0 && dy === 1) || (dx === 1 && dy === 0)
    );
  }
}
