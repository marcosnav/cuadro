import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import SolvedWallpaper from './../../components/styled/SolvedWallpaper';

describe('<SolvedWallapaper />', () => {
  test('renders properly', () => {
    const component = mount(<SolvedWallpaper image={'/cat-picture.jpg'} />);
    expect(component).toHaveStyleRule('background-image', 'url("/cat-picture.jpg")');
    expect(component).toHaveStyleRule('opacity', '0');
    expect(component).toMatchSnapshot();
  });

  test('show: true', () => {
    const component = mount(<SolvedWallpaper image={'/cat-picture.jpg'} show={true} />);
    expect(component).toHaveStyleRule('opacity', '1');
    expect(component).toMatchSnapshot();
  });
});
