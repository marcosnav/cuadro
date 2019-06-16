import { shallow } from 'enzyme';
import React from 'react';
import PuzzlePiece from './../../components/PuzzlePiece';

describe('<PuzzlePiece/>', () => {
  test('renders properly', () => {
    const component = shallow(<PuzzlePiece image={''} num={1} position={3} />);
    expect(component).toMatchSnapshot();
  });

  test('must have a translation based on its position', () => {
    const component = shallow(<PuzzlePiece image={''} num={1} position={3} />);
    expect(component.props().top).toBe(0);
    expect(component.props().left).toBe(201);

    component.setProps({ position: 6 });
    expect(component.props().top).toBe(67);
    expect(component.props().left).toBe(134);

    component.setProps({ position: 9 });
    expect(component.props().top).toBe(134);
    expect(component.props().left).toBe(67);

    component.setProps({ position: 12 });
    expect(component.props().top).toBe(201);
    expect(component.props().left).toBe(0);
  });
});
