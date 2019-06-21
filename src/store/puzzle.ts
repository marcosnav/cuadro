import { action, observable, toJS } from 'mobx';
import { Status, SwipeDirection } from './../constants';
import { IImageData } from './../services';

interface IAuthor {
  name: string;
  url: string;
}

interface IImageProvider {
  get: () => Promise<IImageData>;
}

/**
 * PuzzleStore that contains the actual puzzle state and acts according to moves.
 */
export class PuzzleStore {
  @observable
  public puzzle: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  @observable
  public state: Status = Status.STARTING_NEW_GAME;

  @observable
  public image: string = '';

  @observable
  public imageAuthor: IAuthor = { name: '', url: '' };

  private originalState: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  private readonly sideSize: number;
  private readonly totalPieces: number;
  private readonly fourSquaredSolution: string = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].toString();
  private readonly imageProvider: IImageProvider;

  constructor(imageProvider: IImageProvider, sideSize: number = 4) {
    this.sideSize = sideSize;
    this.totalPieces = sideSize * sideSize;
    this.imageProvider = imageProvider;
  }

  /**
   * Start a new puzzle
   */
  @action.bound
  public async start(): Promise<void> {
    await this.startGameDelay();
    try {
      this.state = Status.LOADING_IMAGE;
      await this.loadImage();
      this.mix();
      // Give some time to animations
      setTimeout(() => {
        this.state = Status.PLAYING_GAME;
      }, 2000);
    } catch (err) {
      this.state = Status.ERROR;
    }
  }

  /**
   * Shuffle the puzzle randomly
   */
  @action.bound
  public mix(): void {
    const { totalPieces, puzzle } = this;
    const newPuzzle = toJS(puzzle);
    newPuzzle.forEach((pos, piece) => {
      const randomPos = Math.floor((Math.random() * totalPieces) + 0);
      const [ swap ] = newPuzzle.splice(randomPos, 1, pos);
      newPuzzle[piece] = swap;
    });
    const solvable = this.isSolvable(newPuzzle);
    if (!solvable) {
      this.makeItSolvable(newPuzzle);
    }
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

  /**
   * Set status as starting new game with a delay for animation purposes.
   */
  private startGameDelay(): Promise<void> {
    this.state = Status.STARTING_NEW_GAME;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  private async loadImage(): Promise<void> {
    this.state = Status.LOADING_IMAGE;
    try {
      const image = await this.imageProvider.get();
      this.image = image.url;
      this.imageAuthor = {
        name: image.author,
        url: image.authorUrl,
      };
    } catch (err) {
      return Promise.reject(err);
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

  private isSolvable(puzzle: number[]): boolean {
    let inversions = 0;
    puzzle.forEach((_, pos) => {
      const slotPiece = puzzle.indexOf(pos);
      for (let i = pos + 1; i < puzzle.length; i++) {
        const nextPiece = puzzle.indexOf(i);
        if (nextPiece === 0) {
          continue;
        }
        if (slotPiece > nextPiece) {
          inversions++;
        }
      }
    });
    const hasEvenInversions = inversions % 2 === 0;
    const blankSlotRow = Math.floor(puzzle[0] / this.sideSize);
    return blankSlotRow % 2 === 0 ? hasEvenInversions : !hasEvenInversions;
  }

  private makeItSolvable(puzzle: number[]): void {
    let swapPieceA = puzzle.indexOf(1);
    let swapPieceB = puzzle.indexOf(1 + this.sideSize);
    if (swapPieceA === 0) {
      swapPieceA = puzzle.indexOf(2);
      swapPieceB = puzzle.indexOf(2 + this.sideSize);
    } else if (swapPieceB === 0) {
      swapPieceB = puzzle.indexOf(1 + this.sideSize * 3);
    }
    puzzle[swapPieceA] = puzzle.splice(swapPieceB, 1, 1)[0];
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
