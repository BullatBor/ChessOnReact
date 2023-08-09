import { Cell } from "../Cell";
import { Colors } from "../Colors";
import blackFigure from "../../assets/black-bishop.png";
import whiteFigure from "../../assets/white-bishop.png";
import { Figure, FigureNames } from "./Figures";

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackFigure : whiteFigure;
    this.name = FigureNames.BISHOP;
  }
}
