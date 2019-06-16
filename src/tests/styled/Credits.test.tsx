import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import Credits from './../../components/styled/Credits';

describe('<Credits/>', () => {
  it('renders properly', () => {
    const component = mount(<Credits>Made by john</Credits>);
    expect(component.text()).toMatch('Made by john');
    expect(component).toMatchSnapshot();
  });
});
