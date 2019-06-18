import { action, observable, toJS } from 'mobx';
import { Status, SwipeDirection } from './../constants';

/**
 * PuzzleStore that contains the actual puzzle state and acts according to moves.
 */
export class PuzzleStore {
  @observable
  public puzzle: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  @observable
  public state: Status = Status.PLAYING_GAME;

  private originalState: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  private readonly sideSize: number;
  private readonly totalPieces: number;
  private readonly fourSquaredSolution: string = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].toString();

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
    this.originalState = newPuzzle;
  }

  /**
   * Reload the puzzle to its original state (restart game)
   */
  @action.bound
  public reload(): void {
    const original = toJS(this.originalState);
    this.puzzle = original;
  }

  /**
   * Set state to show original image
   */
  @action.bound
  public toggleOriginalImage(): void {
    if (this.state === Status.PLAYING_GAME) {
      this.state = Status.DISPLAY_ORIGINAL;
    } else {
      this.state = Status.PLAYING_GAME;
    }
  }

  /**
   * Move the piece according to the swipe direction (when direction is a possible move)
   * @param direction SwipeDirection
   */
  @action.bound
  public move(direction: SwipeDirection): void {
    const { puzzle, state } = this;
    if (state === Status.FINISHED_GAME) {
      return;
    }
    const updatedPuzzle = toJS(puzzle);
    const pos: number = puzzle[0];
    if (!this.canMoveTo(direction)) {
      return;
    }
    this[direction](updatedPuzzle, pos);
    this.puzzle = updatedPuzzle;
    if (this.puzzle.toString() === this.fourSquaredSolution) {
      this.state = Status.FINISHED_GAME;
    }
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
