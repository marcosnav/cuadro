import { shallow } from 'enzyme';
import React from 'react';
import ErrorMessage from './../../components/ErrorMessage';

describe('<ErrorMessage/>', () => {
  test('renders properly', () => {
    const component = shallow(<ErrorMessage />);
    expect(component).toMatchSnapshot();
  });
});
