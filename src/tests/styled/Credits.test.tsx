import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import Credits from './../../components/styled/Credits';

describe('<Credits/>', () => {
  test('renders properly', () => {
    const component = mount(<Credits bottom={true} >Made by john</Credits>);
    expect(component.text()).toMatch('Made by john');
    expect(component).toMatchSnapshot();
  });

  test('bottom: false', () => {
    const component = mount(<Credits bottom={false} >Made by john</Credits>);
    expect(component).toHaveStyleRule('bottom', 'auto');
    expect(component).toHaveStyleRule('left', 'auto');
    expect(component).toHaveStyleRule('position', 'relative');
  });
});
