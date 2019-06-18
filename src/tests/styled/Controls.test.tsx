import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { ThemeConsumer } from 'styled-components';
import Controls from './../../components/styled/Controls';
import { theme } from './../../constants';

describe('<Controls/>', () => {
  beforeAll(() => {
    ThemeConsumer._currentValue = theme;
  });

  test('renders properly', () => {
    const component = mount(<Controls />);
    expect(component).toHaveStyleRule('background', theme.WHITE);
    expect(component).toHaveStyleRule('padding', '0 16px');
    expect(component).toHaveStyleRule('width', '300px');
    expect(component).toMatchSnapshot();
  });

  describe('with prop: new-only', () => {
    test('shows only the new game option', () => {
      const component = mount(<Controls newOnly={true} />);
      expect(component).toHaveStyleRule('padding', '0 10px');
      expect(component).toHaveStyleRule('width', '77px');
      expect(component).toMatchSnapshot();
    });
  });
});
