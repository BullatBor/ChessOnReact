import { Cell } from "../Cell";
import { Colors } from "../Colors";
import blackFigure from "../../assets/black-queen.png";
import whiteFigure from "../../assets/white-queen.png";
import { Figure, FigureNames } from "./Figures";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackFigure : whiteFigure;
    this.name = FigureNames.QUEEN;
  }
}
