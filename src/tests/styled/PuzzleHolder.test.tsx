import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { ThemeConsumer } from 'styled-components';
import PuzzleHolder from './../../components/styled/PuzzleHolder';
import { theme } from './../../constants';

describe('<PuzzleHolder/>', () => {
  beforeAll(() => {
    ThemeConsumer._currentValue = theme;
  });

  test('renders properly', () => {
    const component = mount(<PuzzleHolder />);
    expect(component).toHaveStyleRule(
      'background',
      `linear-gradient(30deg,${theme.GD_BLUE} 0%,${theme.GD_PURPLE} 100%)`,
    );
    expect(component).toHaveStyleRule('height', '268px');
    expect(component).toHaveStyleRule('width', '268px');
    expect(component).toMatchSnapshot();
  });
});
