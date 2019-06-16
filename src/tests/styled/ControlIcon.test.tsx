import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import ControlIcon from './../../components/styled/ControlIcon';

describe('<ControlIcon/>', () => {
  test('renders properly', () => {
    const component = mount(<ControlIcon />);
    expect(component).toHaveStyleRule('height', '26px');
    expect(component).toHaveStyleRule('width', 'auto');
    expect(component).toMatchSnapshot();
  });
});
