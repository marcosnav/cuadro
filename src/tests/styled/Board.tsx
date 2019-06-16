import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { ThemeConsumer } from 'styled-components';
import Board from './../../components/styled/Board';
import { theme } from './../../constants';

describe('<Board/>', () => {
  beforeAll(() => {
    ThemeConsumer._currentValue = theme;
  });

  test('renders properly', () => {
    const component = mount(<Board />);
    expect(component).toHaveStyleRule('background', theme.WHITE);
    expect(component).toHaveStyleRule('height', '300px');
    expect(component).toHaveStyleRule('width', '300px');
    expect(component).toMatchSnapshot();
  });
});
