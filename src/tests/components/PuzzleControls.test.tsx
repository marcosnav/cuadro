import { shallow } from 'enzyme';
import React from 'react';
import PuzzleControls from './../../components/PuzzleControls';

describe('<PuzzleControls/>', () => {
  test('renders properly', () => {
    const component = shallow(<PuzzleControls />);
    const controls = component.find('ControlButton');
    expect(controls.getElements().length).toBe(3);
    expect(component).toMatchSnapshot();
  });

  describe('with prop: new-only', () => {
    test('shows only the new game option', () => {
      const component = shallow(<PuzzleControls newOnly={true} />);
      const controls = component.find('ControlButton');
      expect(controls.getElements().length).toBe(1);
    });
  });
});
