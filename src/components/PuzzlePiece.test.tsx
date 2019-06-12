import { mount } from 'enzyme';
import 'jest-enzyme';
import 'jest-styled-components';
import React from 'react';
import PuzzlePiece from './PuzzlePiece';

describe('<PuzzlePiece/>', () => {
  test('renders properly', () => {
    const component = mount(<PuzzlePiece image={''} num={1} position={3} />);
    expect(component).toMatchSnapshot();
  });

  test('must have a translation based on its position', () => {
    const component = mount(<PuzzlePiece image={''} num={1} position={3} />);
    expect(component).toHaveStyleRule('transform', 'translate(201px,0px)');

    component.setProps({ position: 6 });
    expect(component).toHaveStyleRule('transform', 'translate(134px,67px)');

    component.setProps({ position: 9 });
    expect(component).toHaveStyleRule('transform', 'translate(67px,134px)');

    component.setProps({ position: 12 });
    expect(component).toHaveStyleRule('transform', 'translate(0px,201px)');
  });

  test('must display the image based on the piece number', () => {
    const component = mount(<PuzzlePiece image={''} num={1} position={3} />);
    const image = component.find('PieceImage').first();
    expect(image).toHaveStyleRule('transform', 'translate(-67px,0px)');
  });
});
