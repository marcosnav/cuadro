import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import OriginalImage from './../../components/styled/OriginalImage';

describe('<OrignalImage />', () => {
  const component = mount(<OriginalImage image={'/cat-image.jpg'} />);

  test('renders properly', () => {
    expect(component).toHaveStyleRule('background-image', 'url("/cat-image.jpg")');
    expect(component).toHaveStyleRule('opacity', '0');
    expect(component).toHaveStyleRule('pointer-events', 'none');
    expect(component).toMatchSnapshot();
  });

  test('show: true', () => {
    component.setProps({ show: true });
    expect(component).toHaveStyleRule('opacity', '1');
    expect(component).toHaveStyleRule('pointer-events', 'auto');
    expect(component).toMatchSnapshot();
  });
});
