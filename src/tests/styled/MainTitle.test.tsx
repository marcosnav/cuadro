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
    expect(component).toMatchSnapshot();
  });
});
