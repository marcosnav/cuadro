import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import Revealer from './../../components/styled/Revealer';

describe('<Revealer />', () => {
  const component = mount(<Revealer height={100} />);

  test('renders properly', () => {
    expect(component).toHaveStyleRule('height', '0');
    expect(component).toHaveStyleRule('opacity', '0');
    expect(component).toHaveStyleRule('transform', 'translateY(42px)');
    expect(component).toHaveStyleRule('transition', 'opacity 0.8s ease,transform 0.8s ease');
    expect(component).toMatchSnapshot();
  });

  test('show: true', () => {
    component.setProps({ show: true });
    expect(component).toHaveStyleRule('height', '100px');
    expect(component).toHaveStyleRule('opacity', '1');
    expect(component).toHaveStyleRule('transform', 'translateY(0)');
    expect(component).toMatchSnapshot();
  });

  test('easeTiming', () => {
    component.setProps({ easeTiming: '0.6' });
    expect(component).toHaveStyleRule('transition', 'opacity 0.6s ease,transform 0.6s ease');
    expect(component).toMatchSnapshot();
  });

  test('direction DOWN', () => {
    component.setProps({ show: false, direction: 'DOWN' });
    expect(component).toHaveStyleRule('transform', 'translateY(-42px)');
    expect(component).toMatchSnapshot();
  });
});
