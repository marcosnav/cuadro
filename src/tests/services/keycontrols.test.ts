import { SwipeDirection } from './../../constants';
import { KeyControls } from './../../services/keycontrols';

describe('KeyControls', () => {
  test('using arrow keys', () => {
    const keySpy = jest.fn();
    const controls = new KeyControls({
      enter: () => null,
      move: keySpy,
    });
    controls.register();
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 40 }));
    expect(keySpy).toHaveBeenCalledWith(SwipeDirection.DOWN);

    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 38 }));
    expect(keySpy).toHaveBeenCalledWith(SwipeDirection.UP);

    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 37 }));
    expect(keySpy).toHaveBeenCalledWith(SwipeDirection.LEFT);

    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 39 }));
    expect(keySpy).toHaveBeenCalledWith(SwipeDirection.RIGHT);
    expect(keySpy).toHaveBeenCalledTimes(4);
  });

  test('on ENTER', () => {
    const keySpy = jest.fn();
    const controls = new KeyControls({
      enter: keySpy,
      move: () => null,
    });
    controls.register();
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 13 }));
    expect(keySpy).toHaveBeenCalledTimes(1);
  });

  test('unregistered keys do nothing', () => {
    const enterSpy = jest.fn();
    const moveSpy = jest.fn();
    const controls = new KeyControls({
      enter: enterSpy,
      move: moveSpy,
    });
    controls.register();
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 16 }));
    expect(enterSpy).not.toHaveBeenCalled();
    expect(moveSpy).not.toHaveBeenCalled();
  });
});
