import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import AppWrapper from './../../components/styled/AppWrapper';

describe('<AppWrapper/>', () => {
  test('reders properly', () => {
    const component = mount(<AppWrapper />);
    expect(component).toHaveStyleRule('position', 'fixed');
    expect(component).toHaveStyleRule('height', '100vh');
    expect(component).toHaveStyleRule('width', '100%');
    expect(component).toMatchSnapshot();
  });
});
