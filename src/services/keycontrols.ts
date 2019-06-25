import { KeyCodes, KeySwipeMap, SwipeDirection } from './../constants';

type moveCallback = (d: SwipeDirection) => void;
type enterCallback = () => void;

interface IConstruct {
  move: moveCallback;
  enter: enterCallback;
}

export class KeyControls {
  private move: moveCallback;
  private enter: enterCallback;

  constructor({ move, enter }: IConstruct) {
    this.move = move;
    this.enter = enter;
  }

  public register(): void {
    document.addEventListener('keydown', ({ keyCode }: KeyboardEvent) => {
      if (!(keyCode in KeyCodes)) {
        return;
      }

      if (keyCode in KeySwipeMap) {
        return this.move(KeySwipeMap[keyCode]);
      }

      if (keyCode === KeyCodes.ENTER) {
        return this.enter();
      }
    });
  }
}
