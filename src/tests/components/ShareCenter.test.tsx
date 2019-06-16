import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import ShareCenter from './../../components/ShareCenter';

describe('<ShareCenter/>', () => {
  it('renders properly', () => {
    const component = mount(<ShareCenter/>);
    expect(component).toMatchSnapshot();
  });
});
