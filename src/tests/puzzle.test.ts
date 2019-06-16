import { SwipeDirection } from './../constants';
import { PuzzleStore } from './../store/puzzle';

const solvedPuzzle = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// 4 to right : 6 to left : 1 down : 9 up
const mixedPuzzle = [5, 1, 2, 3, 4, 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

describe('PuzzleStore', () => {
  const store = new PuzzleStore();

  test('new instances should have puzzle in order', () => {
    expect(store.puzzle).toEqual(solvedPuzzle);
  });

  test('action: mix', () => {
    store.mix();
    expect(store.puzzle).not.toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    expect(store.puzzle.length).toBe(16);
    expect(new Set(store.puzzle).size).toBe(16);
  });

  describe('.move()', () => {
    describe('when move direction is possible to do', () => {
      test('DOWN', () => {
        store.puzzle = mixedPuzzle;
        store.move(SwipeDirection.DOWN);
        expect(store.puzzle).toEqual([1, 5, 2, 3, 4, 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
      });

      test('RIGHT', () => {
        store.puzzle = mixedPuzzle;
        store.move(SwipeDirection.RIGHT);
        expect(store.puzzle).toEqual([4, 1, 2, 3, 5, 0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
      });

      test('LEFT', () => {
        store.puzzle = mixedPuzzle;
        store.move(SwipeDirection.LEFT);
        expect(store.puzzle).toEqual([6, 1, 2, 3, 4, 0, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
      });

      test('UP', () => {
        store.puzzle = mixedPuzzle;
        store.move(SwipeDirection.UP);
        expect(store.puzzle).toEqual([9, 1, 2, 3, 4, 0, 6, 7, 8, 5, 10, 11, 12, 13, 14, 15]);
      });
    });

    describe('when move direction is not possible', () => {
      test('LEFT', () => {
        store.puzzle = [3, 5, 2, 0, 4, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        store.move(SwipeDirection.LEFT);
        expect(store.puzzle).toEqual([3, 5, 2, 0, 4, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
      });

      test('RIGHT', () => {
        store.puzzle = [8, 5, 2, 3, 4, 1, 6, 0, 7, 9, 10, 11, 12, 13, 14, 15];
        store.move(SwipeDirection.RIGHT);
        expect(store.puzzle).toEqual([8, 5, 2, 3, 4, 1, 6, 0, 7, 9, 10, 11, 12, 13, 14, 15]);
      });

      test('DOWN', () => {
        store.puzzle = [3, 5, 2, 0, 4, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        store.move(SwipeDirection.DOWN);
        expect(store.puzzle).toEqual([3, 5, 2, 0, 4, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
      });

      test('UP', () => {
        store.puzzle = [13, 5, 2, 14, 4, 1, 6, 7, 8, 9, 10, 11, 12, 3, 0, 15];
        store.move(SwipeDirection.UP);
        expect(store.puzzle).toEqual([13, 5, 2, 14, 4, 1, 6, 7, 8, 9, 10, 11, 12, 3, 0, 15]);
      });
    });
  });
});
