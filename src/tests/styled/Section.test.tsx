import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import Section from './../../components/styled/Section';

describe('<Section/>', () => {
  test('renders properly', () => {
    const component = mount(<Section>section text</Section>);
    expect(component.text()).toBe('section text');
    expect(component).toHaveStyleRule('margin-top', '42px');
    expect(component).toHaveStyleRule('text-align', 'center');
    expect(component).toMatchSnapshot();
  });
});
