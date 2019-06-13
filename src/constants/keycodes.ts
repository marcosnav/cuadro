import { SwipeDirection } from './directions';

/**
 * KeyCodes to match for keypress events
 */
export enum KeyCodes {
  DOWN = 40,
  LEFT = 37,
  RIGHT = 39,
  UP = 38,
  ENTER = 13,
}

/**
 * Map key code with swipe direction
 */
export const KeySwipeMap: { [key: number]: SwipeDirection } = {
  40: SwipeDirection.DOWN,
  37: SwipeDirection.LEFT,
  39: SwipeDirection.RIGHT,
  38: SwipeDirection.UP,
};
