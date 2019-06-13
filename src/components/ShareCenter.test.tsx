import { mount } from 'enzyme';
import 'jest-enzyme';
import 'jest-styled-components';
import React from 'react';
import ShareCenter from './ShareCenter';

describe('<ShareCenter/>', () => {
  it('renders properly', () => {
    const component = mount(<ShareCenter/>);
    expect(component).toMatchSnapshot();
  });
});
