import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { ThemeConsumer } from 'styled-components';
import Link from './../../components/styled/Link';
import { theme } from './../../constants';

describe('<Link/>', () => {
  beforeAll(() => {
    ThemeConsumer._currentValue = theme;
  });

  test('renders properly', () => {
    const component = mount(<Link>link text</Link>);
    expect(component).toHaveStyleRule('color', theme.TEXT);
    expect(component).toMatchSnapshot();
  });
});
