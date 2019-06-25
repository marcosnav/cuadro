import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import LogoAnimator from './../../components/styled/LogoAnimator';

describe('<LogoAnimator />', () => {
  test('renders properly', () => {
    const component = mount(<LogoAnimator />);
    expect(component).toHaveStyleRule('animation', 'none');
    expect(component).toHaveStyleRule('margin-top', '0');
    expect(component).toMatchSnapshot();
  });

  test('animate: true', () => {
    const component = mount(<LogoAnimator animate={true} />);
    expect(component).toHaveStyleRule('animation', expect.stringContaining('2s ease infinite'));
    expect(component).toHaveStyleRule('margin-top', 'calc(50vh - 98px)');
    expect(component).toMatchSnapshot();
  });
});
