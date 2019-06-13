import { mount } from 'enzyme';
import 'jest-enzyme';
import 'jest-styled-components';
import React from 'react';
import PrettyLink from './PrettyLink';

describe('<PrettyLink/>', () => {
  test('renders properly', () => {
    const clickSpy = jest.fn();
    const component = mount(<PrettyLink onClick={clickSpy}>link text</PrettyLink>);
    component.simulate('click');
    expect(component).toMatchSnapshot();
    expect(clickSpy).toHaveBeenCalled();
  });
});
