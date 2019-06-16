import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import Control from './../../components/styled/Control';

describe('<Control/>', () => {
  test('renders properly', () => {
    const component = mount(<Control>Control text</Control>);
    expect(component.text()).toBe('Control text');
    expect(component).toMatchSnapshot();
  });

  describe('when disabled', () => {
    const component = mount(<Control disabled={true} >disabled</Control>);

    test('must be opaque', () => {
      expect(component).toHaveStyleRule('opacity', '0.3');
    });

    test('when re-enabled, click must work and be full color', () => {
      component.setProps({ disabled: false });
      expect(component).toHaveStyleRule('opacity', '1');
    });
  });
});
