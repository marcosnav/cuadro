import { mount } from 'enzyme';
import 'jest-enzyme';
import 'jest-styled-components';
import React from 'react';
import { theme } from './../constants';
import Logo, { Status } from './Logo';

describe('<Logo/>', () => {
  test('renders properly', () => {
    const component = mount(<Logo />);
    expect(component).toMatchSnapshot();
  });

  describe('on: Status.LOADING', () => {
    test('animates for loading visual feedback', () => {
      const component = mount(<Logo status={Status.LOADING} />);
      expect(component).toHaveStyleRule('animation', expect.stringContaining('2s ease infinite'));
    });
  });

  describe('on: Status.ERROR', () => {
    test('figure fill must be apropriate', () => {
      const component = mount(<Logo status={Status.ERROR} />);
      const pathFills = component.find('path');
      expect(pathFills.length).toBe(2);
      expect(pathFills.getElements()[0].props.fill).toBe(theme.RED);
      expect(pathFills.getElements()[1].props.fill).toBe(theme.RED);
    });
  });
});
