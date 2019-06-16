import { mount } from 'enzyme';
import React from 'react';
import PrettyLink from './../../components/PrettyLink';

describe('<PrettyLink/>', () => {
  test('renders properly', () => {
    const clickSpy = jest.fn();
    const component = mount(<PrettyLink onClick={clickSpy}>link text</PrettyLink>);
    component.simulate('click');
    expect(component).toMatchSnapshot();
    expect(clickSpy).toHaveBeenCalled();
  });
});
