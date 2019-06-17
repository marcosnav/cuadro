import { mount } from 'enzyme';
import React from 'react';
import PuzzleBoard from './../../components/PuzzleBoard';
import { SwipeDirection } from './../../constants';

const puzzleStateMock = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const touchHandler = {
  move: (x: number, y: number) => ({ changedTouches: [{ screenX: x, screenY: y }] }),
  start: (x: number, y: number) => ({ touches: [{ screenX: x, screenY: y }] }),
};

describe('<PuzzleBoard/>', () => {
  test('renders properly', () => {
    const swipedEvMock = () => '';
    const component = mount(
    <PuzzleBoard image={''} puzzleState={puzzleStateMock} onSwipe={swipedEvMock} showOriginal={false} />);
    expect(component).toMatchSnapshot();
  });

  describe('onSwipe', () => {
    const swipedSpy = jest.fn();
    const component = mount(
    <PuzzleBoard image={''} puzzleState={puzzleStateMock} onSwipe={swipedSpy} showOriginal={false} />);

    test('not enough swipe distance', () => {
      component.simulate('touchStart', touchHandler.start(150, 150));
      component.simulate('touchEnd', touchHandler.move(110, 180));
      expect(swipedSpy).not.toHaveBeenCalled();
    });

    test('swipe left, calls with SwipeDirection.LEFT', () => {
      component.simulate('touchStart', touchHandler.start(150, 150));
      component.simulate('touchEnd', touchHandler.move(50, 150));
      expect(swipedSpy).toHaveBeenCalledTimes(1);
      expect(swipedSpy).toHaveBeenCalledWith(SwipeDirection.LEFT);
    });

    test('swipe right, calls with SwipeDirection.RIGHT', () => {
      component.simulate('touchStart', touchHandler.start(150, 150));
      component.simulate('touchEnd', touchHandler.move(250, 150));
      expect(swipedSpy).toHaveBeenCalledTimes(2);
      expect(swipedSpy).toHaveBeenCalledWith(SwipeDirection.RIGHT);
    });

    test('swipe up, calls with SwipeDirection.UP', () => {
      component.simulate('touchStart', touchHandler.start(150, 150));
      component.simulate('touchEnd', touchHandler.move(150, 50));
      expect(swipedSpy).toHaveBeenCalledTimes(3);
      expect(swipedSpy).toHaveBeenCalledWith(SwipeDirection.UP);
    });

    test('swipe down, calls with SwipeDirection.DOWN', () => {
      component.simulate('touchStart', touchHandler.start(150, 150));
      component.simulate('touchEnd', touchHandler.move(150, 250));
      expect(swipedSpy).toHaveBeenCalledTimes(4);
      expect(swipedSpy).toHaveBeenCalledWith(SwipeDirection.DOWN);
    });
  });

  describe('on ambiguous diagonal swiping', () => {
    describe('longest distance must define swiped side', () => {
      test('left > up', () => {
        const swipedSpy = jest.fn();
        const component = mount(<PuzzleBoard image={''} puzzleState={puzzleStateMock} onSwipe={swipedSpy} />);
        component.simulate('touchStart', touchHandler.start(150, 150));
        component.simulate('touchEnd', touchHandler.move(50, 60));
        expect(swipedSpy).toHaveBeenCalledTimes(1);
        expect(swipedSpy).toHaveBeenCalledWith(SwipeDirection.LEFT);
      });

      test('left < up', () => {
        const swipedSpy = jest.fn();
        const component = mount(<PuzzleBoard image={''} puzzleState={puzzleStateMock} onSwipe={swipedSpy} />);
        component.simulate('touchStart', touchHandler.start(150, 150));
        component.simulate('touchEnd', touchHandler.move(60, 50));
        expect(swipedSpy).toHaveBeenCalledTimes(1);
        expect(swipedSpy).toHaveBeenCalledWith(SwipeDirection.UP);
      });

      test('right > up', () => {
        const swipedSpy = jest.fn();
        const component = mount(<PuzzleBoard image={''} puzzleState={puzzleStateMock} onSwipe={swipedSpy} />);
        component.simulate('touchStart', touchHandler.start(150, 150));
        component.simulate('touchEnd', touchHandler.move(260, 60));
        expect(swipedSpy).toHaveBeenCalledTimes(1);
        expect(swipedSpy).toHaveBeenCalledWith(SwipeDirection.RIGHT);
      });

      test('right < up', () => {
        const swipedSpy = jest.fn();
        const component = mount(<PuzzleBoard image={''} puzzleState={puzzleStateMock} onSwipe={swipedSpy} />);
        component.simulate('touchStart', touchHandler.start(150, 150));
        component.simulate('touchEnd', touchHandler.move(240, 50));
        expect(swipedSpy).toHaveBeenCalledTimes(1);
        expect(swipedSpy).toHaveBeenCalledWith(SwipeDirection.UP);
      });

      test('left > down', () => {
        const swipedSpy = jest.fn();
        const component = mount(<PuzzleBoard image={''} puzzleState={puzzleStateMock} onSwipe={swipedSpy} />);
        component.simulate('touchStart', touchHandler.start(150, 150));
        component.simulate('touchEnd', touchHandler.move(50, 240));
        expect(swipedSpy).toHaveBeenCalledTimes(1);
        expect(swipedSpy).toHaveBeenCalledWith(SwipeDirection.LEFT);
      });

      test('left < down', () => {
        const swipedSpy = jest.fn();
        const component = mount(<PuzzleBoard image={''} puzzleState={puzzleStateMock} onSwipe={swipedSpy} />);
        component.simulate('touchStart', touchHandler.start(150, 150));
        component.simulate('touchEnd', touchHandler.move(60, 260));
        expect(swipedSpy).toHaveBeenCalledTimes(1);
        expect(swipedSpy).toHaveBeenCalledWith(SwipeDirection.DOWN);
      });

      test('right > down', () => {
        const swipedSpy = jest.fn();
        const component = mount(<PuzzleBoard image={''} puzzleState={puzzleStateMock} onSwipe={swipedSpy} />);
        component.simulate('touchStart', touchHandler.start(150, 150));
        component.simulate('touchEnd', touchHandler.move(260, 240));
        expect(swipedSpy).toHaveBeenCalledTimes(1);
        expect(swipedSpy).toHaveBeenCalledWith(SwipeDirection.RIGHT);
      });

      test('right < down', () => {
        const swipedSpy = jest.fn();
        const component = mount(<PuzzleBoard image={''} puzzleState={puzzleStateMock} onSwipe={swipedSpy} />);
        component.simulate('touchStart', touchHandler.start(150, 150));
        component.simulate('touchEnd', touchHandler.move(240, 260));
        expect(swipedSpy).toHaveBeenCalledTimes(1);
        expect(swipedSpy).toHaveBeenCalledWith(SwipeDirection.DOWN);
      });
    });
  });
});
