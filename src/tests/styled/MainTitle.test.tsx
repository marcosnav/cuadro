import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { ThemeConsumer } from 'styled-components';
import MainTitle from './../../components/styled/MainTitle';
import { theme } from './../../constants';

describe('<MainTitle />', () => {
  beforeAll(() => {
    ThemeConsumer._currentValue = theme;
  });

  test('renders properly', () => {
    const component = mount(<MainTitle>Cuadro Title</MainTitle>);
    expect(component.text()).toBe('Cuadro Title');
    expect(component).toHaveStyleRule('color', theme.TEXT);
    expect(component).toHaveStyleRule('height', '0px');
    expect(component).toHaveStyleRule('margin-bottom', '0px');
    expect(component).toHaveStyleRule('opacity', '0');
    expect(component).toMatchSnapshot();
  });

  test('show: true', () => {
    const component = mount(<MainTitle show={true} >Cuadro Title</MainTitle>);
    expect(component).toHaveStyleRule('color', theme.TEXT);
    expect(component).toHaveStyleRule('height', '26px');
    expect(component).toHaveStyleRule('margin-bottom', '26px');
    expect(component).toHaveStyleRule('opacity', '1');
    expect(component).toMatchSnapshot();
  });
});
