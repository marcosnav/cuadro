import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import Positioner from './../../components/styled/Positioner';

describe('<Positioner/>', () => {
  const component = mount(<Positioner />);

  test('renders properly', () => {
    expect(component).toHaveStyleRule('bottom', '0px');
    expect(component).toHaveStyleRule('left', '0px');
    expect(component).toHaveStyleRule('right', '0px');
    expect(component).toHaveStyleRule('top', '0px');
    expect(component).toMatchSnapshot();
  });

  test('sets position and translates accordingly', () => {
    component.setProps({ bottom: 10, left: 15, right: 15, top: 45});
    expect(component).toHaveStyleRule('bottom', '10px');
    expect(component).toHaveStyleRule('left', '15px');
    expect(component).toHaveStyleRule('right', '15px');
    expect(component).toHaveStyleRule('top', '45px');

    component.setProps({ moveX: 100, moveY: 200 });
    expect(component).toHaveStyleRule('transform', 'translate(100px,200px)');
  });
});
