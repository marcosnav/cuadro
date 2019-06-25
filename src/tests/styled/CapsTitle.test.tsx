import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { ThemeConsumer } from 'styled-components';
import CapsTitle from './../../components/styled/CapsTitle';
import { theme } from './../../constants';

describe('<CapsTitle/>', () => {
  beforeAll(() => {
    ThemeConsumer._currentValue = theme;
  });

  test('renders properly', () => {
    const component = mount(<CapsTitle>link text</CapsTitle>);
    expect(component.text()).toBe('link text');
    expect(component).toHaveStyleRule('color', theme.TEXT);
    expect(component).toHaveStyleRule('text-align', 'center');
    expect(component).toHaveStyleRule('text-transform', 'uppercase');
    expect(component).toMatchSnapshot();
  });
});
