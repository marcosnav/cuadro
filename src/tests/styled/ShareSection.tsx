import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import ShareSection from './../../components/styled/ShareSection';

describe('<ShareSection/>', () => {
  test('renders properly', () => {
    const component = mount(<ShareSection/>);
    expect(component).toHaveStyleRule('display', 'flex');
    expect(component).toHaveStyleRule('justify-content', 'center');
    expect(component).toMatchSnapshot();
  });
});
