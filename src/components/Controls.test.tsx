import { mount } from 'enzyme';
import 'jest-enzyme';
import 'jest-styled-components';
import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { theme } from './../constants';
import Controls from './Controls';

describe('<Controls/>', () => {
  beforeAll(() => {
    ThemeConsumer._currentValue = theme;
  });

  test('renders properly', () => {
    const component = mount(<Controls />);
    expect(component).toMatchSnapshot();
  });

  describe('with prop: new-only', () => {
    test('shows only the new game option', () => {
      const component = mount(<Controls newOnly={true} />);
      const controls = component.find('ControlButton');
      expect(component).toHaveStyleRule('width', 'auto');
      expect(controls.getElements().length).toBe(1);
    });
  });
});
