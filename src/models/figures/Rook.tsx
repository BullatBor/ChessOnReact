import { Cell } from "../Cell";
import { Colors } from "../Colors";
import blackFigure from "../../assets/black-rook.png";
import whiteFigure from "../../assets/white-rook.png";
import { Figure, FigureNames } from "./Figures";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackFigure : whiteFigure;
    this.name = FigureNames.ROOK;
  }
}
