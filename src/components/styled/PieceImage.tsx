import styled, { StyledProps } from 'styled-components';

interface IProps {
  left: number;
  top: number;
  image: string;
}

const PieceImage = styled.div`
  background: ${(props) => props.theme.DARK};
  background-image: url(${({ image }: StyledProps<IProps>) => image});
  background-position: center center;
  background-size: cover cover;
  height: 268px;
  position: relative;
  transform: ${({top, left}: StyledProps<IProps>) => `translate(${left}px,${top}px);`}
  width: 268px;
`;

PieceImage.displayName = 'PieceImage';

export default PieceImage;
