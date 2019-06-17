import { SwipeDirection } from './../constants';
import { PuzzleStore } from './../store/puzzle';

const solvedPuzzle = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const mixedPuzzle = [
  10, 14,  5,  8,
  15,  0,  3,  6,
  1,  9, 13, 11,
  4, 12,  7,  2,
];

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
        expect(store.puzzle).toEqual([
          6, 14,  5,  8,
          15,  0,  3,  10,
          1,  9, 13, 11,
          4, 12,  7,  2,
        ]);
      });

      test('RIGHT', () => {
        store.puzzle = mixedPuzzle;
        store.move(SwipeDirection.RIGHT);
        expect(store.puzzle).toEqual([
          9, 14,  5,  8,
          15,  0,  3,  6,
          1,  10, 13, 11,
          4, 12,  7,  2,
        ]);
      });

      test('LEFT', () => {
        store.puzzle = mixedPuzzle;
        store.move(SwipeDirection.LEFT);
        expect(store.puzzle).toEqual([
          11, 14,  5,  8,
          15,  0,  3,  6,
          1,  9, 13, 10,
          4, 12,  7,  2,
        ]);
      });

      test('UP', () => {
        store.puzzle = mixedPuzzle;
        store.move(SwipeDirection.UP);
        expect(store.puzzle).toEqual([
          14, 10,  5,  8,
          15,  0,  3,  6,
          1,  9, 13, 11,
          4, 12,  7,  2,
        ]);
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
