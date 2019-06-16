import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import TriangleAnimator from './../../components/styled/TriangleAnimator';

describe('<TriangleAnimator />', () => {
  test('renders properly', () => {
    const component = mount(<TriangleAnimator />);
    expect(component).toHaveStyleRule('animation', 'none');
    expect(component).toMatchSnapshot();
  });

  test('animate: true', () => {
    const component = mount(<TriangleAnimator animate={true} />);
    expect(component).toHaveStyleRule('animation', expect.stringContaining('2s ease infinite forwards'));
    expect(component).toMatchSnapshot();
  });

  test('animate: true && reversed: true', () => {
    const component = mount(<TriangleAnimator reversed={true} animate={true} />);
    expect(component).toHaveStyleRule('animation', expect.stringContaining('2s ease infinite forwards'));
    expect(component).toMatchSnapshot();
  });
});
