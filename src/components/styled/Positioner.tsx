import styled from 'styled-components';

interface IProps {
  bottom?: number;
  left?: number;
  moveX?: number;
  moveY?: number;
  right?: number;
  top?: number;
}

const position = (pos: number = 0) => {
  return pos + 'px';
};

const translate = (x: number = 0, y: number = 0) => {
  return `translate(${x}px, ${y}px)`;
};

const Positioner = styled.div<IProps>`
  bottom: ${({ bottom }) => position(bottom)};
  left: ${({ left }) => position(left)};
  position: fixed;
  right: ${({ right }) => position(right)};
  top: ${({ top }) => position(top)};
  transform: ${({ moveX, moveY }) => translate(moveX, moveY)};
  transition: all 0.6s ease;
`;

Positioner.displayName = 'Positioner';

export default Positioner;
