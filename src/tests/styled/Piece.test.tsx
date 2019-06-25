import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { ThemeConsumer } from 'styled-components';
import Piece from './../../components/styled/Piece';
import { theme } from './../../constants';

describe('<Piece/>', () => {
  beforeAll(() => {
    ThemeConsumer._currentValue = theme;
  });

  test('renders properly', () => {
    const component = mount(<Piece top={0} left={201} />);
    expect(component).toHaveStyleRule('background', theme.DARK);
    expect(component).toHaveStyleRule('transform', 'translate(201px,0px)');
    expect(component).toHaveStyleRule('height', '67px');
    expect(component).toHaveStyleRule('width', '67px');
    expect(component).toMatchSnapshot();
  });
});
