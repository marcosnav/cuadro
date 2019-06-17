import { action, observable, toJS } from 'mobx';
import { SwipeDirection } from './../constants';

/**
 * PuzzleStore that contains the actual puzzle state and acts according to moves.
 */
export class PuzzleStore {
  @observable
  public puzzle: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  private sideSize: number;
  private totalPieces: number;

  constructor(sideSize: number = 4) {
    this.sideSize = sideSize;
    this.totalPieces = sideSize * sideSize;
  }

  /**
   * Shuffle the puzzle randomly
   */
  @action.bound
  public mix(): void {
    const { totalPieces, puzzle } = this;
    const newPuzzle = toJS(puzzle);
    newPuzzle.forEach((val, pos) => {
      const randomPos = Math.floor((Math.random() * totalPieces) + 0);
      const [ swap ] = newPuzzle.splice(randomPos, 1, val);
      newPuzzle[pos] = swap;
    });
    this.puzzle = newPuzzle;
  }

  /**
   * Move the piece according to the swipe direction (when direction is a possible move)
   * @param direction SwipeDirection
   */
  @action.bound
  public move(direction: SwipeDirection): void {
    const { puzzle } = this;
    const updatedPuzzle = toJS(puzzle);
    const pos: number = puzzle[0];
    if (!this.canMoveTo(direction)) {
      return;
    }
    this[direction](updatedPuzzle, pos);
    this.puzzle = updatedPuzzle;
  }

  private canMoveTo(direction: SwipeDirection): boolean {
    const { puzzle, sideSize } = this;
    const { LEFT, RIGHT, DOWN } = SwipeDirection;
    const pos: number = puzzle[0];
    if (direction === RIGHT) {
      return pos % sideSize > 0;
    }
    if (direction === LEFT) {
      return pos % sideSize < sideSize - 1;
    }
    if (direction === DOWN) {
      return Math.floor(pos / sideSize) > 0;
    }
    // Default UP
    return Math.floor(pos / sideSize) < sideSize - 1;
  }

  private [SwipeDirection.LEFT](arr: number[], pos: number) {
    const swapWith = arr.indexOf(pos + 1);
    arr[0] = arr.splice(swapWith, 1, pos)[0];
  }

  private [SwipeDirection.RIGHT](arr: number[], pos: number) {
    const swapWith = arr.indexOf(pos - 1);
    arr[0] = arr.splice(swapWith, 1, pos)[0];
  }

  private [SwipeDirection.DOWN](arr: number[], pos: number) {
    const swapWith = arr.indexOf(pos - this.sideSize);
    arr[0] = arr.splice(swapWith, 1, pos)[0];
  }

  private [SwipeDirection.UP](arr: number[], pos: number) {
    const swapWith = arr.indexOf(pos + this.sideSize);
    arr[0] = arr.splice(swapWith, 1, pos)[0];
  }
}
