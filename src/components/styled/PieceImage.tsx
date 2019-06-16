import styled from 'styled-components';

interface IProps {
  left: number;
  top: number;
  image: string;
}

const PieceImage = styled.div<IProps>`
  background: ${(props) => props.theme.DARK};
  background-image: url(${({ image }) => image});
  background-position: center center;
  background-size: cover cover;
  height: 268px;
  position: relative;
  transform: ${({top, left}) => `translate(${left}px,${top}px);`}
  width: 268px;
`;

PieceImage.displayName = 'PieceImage';

export default PieceImage;
