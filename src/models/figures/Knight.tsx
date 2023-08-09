import { Cell } from "../Cell";
import { Colors } from "../Colors";
import blackFigure from "../../assets/black-knight.png";
import whiteFigure from "../../assets/white-knight.png";
import { Figure, FigureNames } from "./Figures";

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackFigure : whiteFigure;
    this.name = FigureNames.KNIGHT;
  }
}
