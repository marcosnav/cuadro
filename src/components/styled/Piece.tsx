import styled, { StyledProps } from 'styled-components';

interface IProps {
  left: number;
  top: number;
}

const Piece = styled.div`
  background: ${(props) => props.theme.DARK};
  flex-shrink: 0;
  height: 67px;
  left: 16px;
  overflow: hidden;
  position: absolute;
  top: 16px;
  transform: ${({top, left}: StyledProps<IProps>) => `translate(${left}px,${top}px);`}
  transition: all 0.2s ease;
  width: 67px;
`;

Piece.displayName = 'Piece';

export default Piece;
