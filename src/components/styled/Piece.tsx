import styled from 'styled-components';

interface IProps {
  left: number;
  top: number;
}

const Piece = styled.div<IProps>`
  background: ${(props) => props.theme.DARK};
  flex-shrink: 0;
  height: 67px;
  left: 16px;
  overflow: hidden;
  position: absolute;
  top: 16px;
  transform: ${({top, left}) => `translate(${left}px,${top}px);`}
  transition: all 0.2s ease;
  width: 67px;
`;

Piece.displayName = 'Piece';

export default Piece;
