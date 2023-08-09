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
}
