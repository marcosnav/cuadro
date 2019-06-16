import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { ThemeConsumer } from 'styled-components';
import AppWrapper from './../../components/styled/AppWrapper';
import { Status, theme } from './../../constants';

describe('<AppWrapper/>', () => {
  beforeAll(() => {
    ThemeConsumer._currentValue = theme;
  });

  test('renders properly', () => {
    const component = mount(<AppWrapper />);
    expect(component).toHaveStyleRule(
      'background',
      `linear-gradient(180deg,${theme.GD_PURPLE} 0%,${theme.GD_BLUE} 100%)`,
    );
    expect(component).toHaveStyleRule('position', 'fixed');
    expect(component).toHaveStyleRule('height', '100vh');
    expect(component).toHaveStyleRule('width', '100%');
    expect(component).toMatchSnapshot();
  });

  describe('on another app states', () => {
    test('on LOADING', () => {
      const component = mount(<AppWrapper status={Status.LOADING_IMAGE} />);
      expect(component).toHaveStyleRule(
        'background', 
        `linear-gradient(180deg,${theme.GD_DARK_PURPLE} 0%,${theme.GD_PURPLE} 100%)`,
      );
    });

    test('on ERROR', () => {
      const component = mount(<AppWrapper status={Status.ERROR} />);
      expect(component).toHaveStyleRule(
        'background', 
        `linear-gradient(180deg,${theme.GD_DARK_RED} 0%,${theme.RED} 100%)`,
      );
    });
  });
});
