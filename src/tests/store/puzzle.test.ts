import { Status, SwipeDirection } from './../../constants';
import { PuzzleStore } from './../../store/puzzle';

const solvedPuzzle = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const mixedPuzzle = [
  10, 14,  5,  8,
  15,  0,  3,  6,
  1,  9, 13, 11,
  4, 12,  7,  2,
];

const ImageProviderMock = {
  get: jest.fn(),
};

ImageProviderMock.get.mockImplementation(() => {
  return new Promise((resolve) => resolve({
    author: 'John',
    authorUrl: 'http://john.doe',
    id: 1,
    url: 'http://image.credits',
  }));
});

describe('PuzzleStore', () => {
  test('new instances should have puzzle in order', () => {
    const store = new PuzzleStore(ImageProviderMock);
    expect(store.puzzle).toEqual(solvedPuzzle);
  });

  test('action: mix', () => {
    const store = new PuzzleStore(ImageProviderMock);
    store.mix();
    expect(store.puzzle).not.toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    expect(store.puzzle.length).toBe(16);
    expect(new Set(store.puzzle).size).toBe(16);
  });

  describe('action: start', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    test('fetching image ok', async () => {
      const store = new PuzzleStore(ImageProviderMock);
      expect(store.state).toBe(Status.STARTING_NEW_GAME);

      const startCall = store.start();
      jest.advanceTimersByTime(1000);

      await startCall;
      expect(store.state).toBe(Status.LOADING_IMAGE);
      expect(store.image).toBe('http://image.credits');
      expect(store.imageAuthor.name).toBe('John');
      expect(store.imageAuthor.url).toBe('http://john.doe');

      jest.advanceTimersByTime(2000);
      expect(store.state).toBe(Status.PLAYING_GAME);
    });

    test('fetching image exception', async () => {
      ImageProviderMock.get.mockImplementationOnce(() => {
        return new Promise((_, reject) => reject(new Error('image req error')));
      });

      const store = new PuzzleStore(ImageProviderMock);
      expect(store.state).toBe(Status.STARTING_NEW_GAME);

      const startCall = store.start();
      jest.advanceTimersByTime(1000);

      await startCall;
      expect(store.state).toBe(Status.ERROR);
    });
  });

  describe('.move()', () => {
    const store = new PuzzleStore(ImageProviderMock);

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

    describe('when the puzzle is solved', () => {
      beforeEach(() => {
        jest.useFakeTimers();
      });

      test('the state gets set as FINISHED_GAME and disables movements', async () => {
        const startCall = store.start();
        jest.runOnlyPendingTimers();
        await startCall;
        jest.runOnlyPendingTimers();
        store.puzzle = [
          5, 1, 2, 3,
          0, 4, 6, 7,
          8, 9, 10, 11,
          12, 13, 14, 15,
        ];
        expect(store.state).toBe(Status.PLAYING_GAME);
        store.move(SwipeDirection.RIGHT);
        expect(store.state).toBe(Status.PLAYING_GAME);
        store.move(SwipeDirection.DOWN);
        expect(store.state).toBe(Status.FINISHED_GAME);
        expect(store.puzzle).toEqual(solvedPuzzle);
        store.move(SwipeDirection.UP);
        store.move(SwipeDirection.UP);
        store.move(SwipeDirection.UP);
        expect(store.puzzle).toEqual(solvedPuzzle);
      });
    });
  });

  describe('.reload', () => {
    test('it should return to its original state (restart game)', () => {
      const store = new PuzzleStore(ImageProviderMock);
      store.mix();
      const originalPuzzle = store.puzzle.toString();
      if (store.puzzle[0] > 3) {
        store.move(SwipeDirection.DOWN);
      } else {
        store.move(SwipeDirection.UP);
      }
      expect(store.puzzle.toString()).not.toBe(originalPuzzle);
      store.reload();
      expect(store.puzzle.toString()).toBe(originalPuzzle);
    });
  });

  describe('.displayOriginal', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    test('it should toggle DISPLAY_ORIGINAL state', async () => {
      const store = new PuzzleStore(ImageProviderMock);
      const startCall = store.start();
      jest.runOnlyPendingTimers();
      await startCall;
      jest.runOnlyPendingTimers();
      expect(store.state).toBe(Status.PLAYING_GAME);
      store.toggleOriginalImage();
      expect(store.state).toBe(Status.DISPLAY_ORIGINAL);
      store.toggleOriginalImage();
      expect(store.state).toBe(Status.PLAYING_GAME);
    });
  });
});
