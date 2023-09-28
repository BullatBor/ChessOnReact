import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { Figure, FigureNames } from "./figures/Figures";
import { King } from "./figures/King";
import { Knight } from "./figures/Knight";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";
import { Rook } from "./figures/Rook";

export class Board {
  cells: Cell[][] = [];
  lostBlackFigures: Figure[] = [];
  lostWhiteFigures: Figure[] = [];
  winner: string | null = null;
  check: boolean = false;
  checkMate: boolean = false;

  public initCells() {
    for (let i = 0; i < 8; i++) {
      let row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        (i + j) % 2 === 0
          ? row.push(new Cell(this, j, i, Colors.BLACK, null)) //черный
          : row.push(new Cell(this, j, i, Colors.WHITE, null));
      }
      this.cells.push(row);
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.check = false;
    newBoard.lostBlackFigures = this.lostBlackFigures;
    newBoard.lostWhiteFigures = this.lostWhiteFigures;
    return newBoard;
  }

  public highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.availabel = !!selectedCell?.figure?.canMove(target);
      }
    }
  }

  public Test(selectedCell: Cell | null): boolean {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.availabel = !!selectedCell?.figure?.canMove(target);
        let check = !!selectedCell?.figure?.checkmate(target);
        if (target.availabel && check) {
          this.check = true;
          target.danger = true;
          return true;
        }
      }
    }
    return false;
  }

  private dangerCancel() {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        if (target.figure?.name === FigureNames.KING) {
          target.danger = false;
        }
      }
    }
  }

  public checkmate(selectedCell: Cell | null) {
    let isCheck = false;
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        if (target.figure) {
          let result = this.Test(target);
          if (result) {
            isCheck = true;
            break;
          }
        }
      }
    }
    if (!isCheck) {
      this.dangerCancel();
    }
  }
  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  private addKnight() {
    new Knight(Colors.WHITE, this.getCell(1, 7));
    new Knight(Colors.WHITE, this.getCell(6, 7));
    new Knight(Colors.BLACK, this.getCell(1, 0));
    new Knight(Colors.BLACK, this.getCell(6, 0));
  }

  private addBishop() {
    new Bishop(Colors.WHITE, this.getCell(2, 7));
    new Bishop(Colors.WHITE, this.getCell(5, 7));
    new Bishop(Colors.BLACK, this.getCell(2, 0));
    new Bishop(Colors.BLACK, this.getCell(5, 0));
  }

  private addRook() {
    new Rook(Colors.WHITE, this.getCell(0, 7));
    new Rook(Colors.WHITE, this.getCell(7, 7));
    new Rook(Colors.BLACK, this.getCell(0, 0));
    new Rook(Colors.BLACK, this.getCell(7, 0));
  }

  private addQueen() {
    new Queen(Colors.WHITE, this.getCell(3, 7));
    new Queen(Colors.BLACK, this.getCell(4, 0));
  }

  private addKing() {
    new King(Colors.WHITE, this.getCell(4, 7));
    new King(Colors.BLACK, this.getCell(3, 0));
  }

  private addPawn() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.WHITE, this.getCell(i, 6));
      new Pawn(Colors.BLACK, this.getCell(i, 1));
    }
  }

  public gameOver(winner: string | null) {
    if (winner === Colors.WHITE) {
      this.winner = Colors.WHITE;
    } else if (winner === Colors.BLACK) {
      this.winner = Colors.BLACK;
    } else this.winner = null;
  }

  public addFigure() {
    this.addKing();
    this.addQueen();
    this.addBishop();
    this.addKnight();
    this.addRook();
    this.addPawn();
  }
}
