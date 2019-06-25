import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import Text from './../../components/styled/Text';

describe('<Text/>', () => {
  test('renders properly', () => {
    const component = mount(<Text bottom={true} >Made by john</Text>);
    expect(component.text()).toMatch('Made by john');
    expect(component).toMatchSnapshot();
  });

  test('bottom: false', () => {
    const component = mount(<Text bottom={false} >Made by john</Text>);
    expect(component).toHaveStyleRule('bottom', 'auto');
    expect(component).toHaveStyleRule('left', 'auto');
    expect(component).toHaveStyleRule('position', 'relative');
  });
});
