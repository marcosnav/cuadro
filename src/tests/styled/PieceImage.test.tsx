import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { ThemeConsumer } from 'styled-components';
import PieceImage from './../../components/styled/PieceImage';
import { theme } from './../../constants';

describe('<PieceImage/>', () => {
  beforeAll(() => {
    ThemeConsumer._currentValue = theme;
  });

  test('renders properly', () => {
    const component = mount(<PieceImage image={'cat-picture.jpg'} top={0} left={201} />);
    expect(component).toHaveStyleRule('background', theme.DARK);
    expect(component).toHaveStyleRule('background-image', 'url(cat-picture.jpg)');
    expect(component).toHaveStyleRule('transform', 'translate(201px,0px)');
    expect(component).toHaveStyleRule('height', '268px');
    expect(component).toHaveStyleRule('width', '268px');
    expect(component).toMatchSnapshot();
  });
});
