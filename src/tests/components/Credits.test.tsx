import { shallow } from 'enzyme';
import React from 'react';
import Credits from './../../components/Credits';

describe('<Credits/>', () => {
  test('renders properly', () => {
    const component = shallow(<Credits />);
    expect(component).toMatchSnapshot();
  });
});
