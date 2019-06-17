import { mount, shallow } from 'enzyme';
import React from 'react';
import PuzzleControls from './../../components/PuzzleControls';

const mockFn = () => '';

describe('<PuzzleControls/>', () => {
  test('renders properly', () => {
    const component = shallow(
    <PuzzleControls onNewGame={mockFn} onRestart={mockFn} onSeeOriginal={mockFn} />);
    const controls = component.find('ControlButton');
    expect(controls.getElements().length).toBe(3);
    // expect(component).toMatchSnapshot();
  });

  describe('with prop: newOnly', () => {
    test('shows only the new game option', () => {
      const component = shallow(
      <PuzzleControls newOnly={true} onNewGame={mockFn} onRestart={mockFn} onSeeOriginal={mockFn} />);
      const controls = component.find('ControlButton');
      expect(controls.getElements().length).toBe(1);
    });
  });

  describe('on actions', () => {
    test('they must be triggered', () => {
      const newGameSpy = jest.fn();
      const restartSpy = jest.fn();
      const originalSpy = jest.fn();
      const component = mount(
      <PuzzleControls onNewGame={newGameSpy} onRestart={restartSpy} onSeeOriginal={originalSpy} />);
      const controls = component.find('ControlButton');
      const newGameControl = controls.first();
      const restartControl = controls.at(1);
      const seeOriginalControl = controls.last();
      newGameControl.simulate('click');
      expect(newGameSpy).toHaveBeenCalled();
      restartControl.simulate('click');
      expect(restartSpy).toHaveBeenCalled();
      seeOriginalControl.simulate('click');
      expect(originalSpy).toHaveBeenCalled();
    });
  });
});
