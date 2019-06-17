import { mount, shallow } from 'enzyme';
import React from 'react';
import PuzzleControls from './../../components/PuzzleControls';
import { Status } from './../../constants';

const mockFn = () => '';

describe('<PuzzleControls/>', () => {
  test('renders properly', () => {
    const component = shallow(
    <PuzzleControls onNewGame={mockFn} onRestart={mockFn} onSeeOriginal={mockFn} />);
    const controls = component.find('ControlButton');
    expect(controls.getElements().length).toBe(3);
    expect(component).toMatchSnapshot();
  });

  describe('with status FINISHED_GAME', () => {
    test('shows only the new game option', () => {
      const component = shallow(
      <PuzzleControls status={Status.FINISHED_GAME} onNewGame={mockFn} onRestart={mockFn} onSeeOriginal={mockFn} />);
      const controls = component.find('ControlButton');
      expect(controls.getElements().length).toBe(1);
    });
  });

  describe('with status DISPLAY_ORIGINAL', () => {
    test('new game and reload must be disabled', () => {
      const component = mount(
      <PuzzleControls status={Status.DISPLAY_ORIGINAL} onNewGame={mockFn} onRestart={mockFn} onSeeOriginal={mockFn} />);
      const controls = component.find('ControlButton');
      expect(controls.getElements().length).toBe(3);
      expect(controls.first().props().disabled).toBe(true);
      expect(controls.at(1).props().disabled).toBe(true);
      expect(controls.last().props().disabled).toBe(false);
      expect(controls.last().text()).toBe('Hide Original');
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
