import { Cell } from "../Cell";
import { Colors } from "../Colors";
import blackFigure from "../../assets/black-pawn.png";
import whiteFigure from "../../assets/white-pawn.png";
import { Figure, FigureNames } from "./Figures";

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackFigure : whiteFigure;
    this.name = FigureNames.PAWN;
  }
}
