import React, { FC } from 'react';
import styled from 'styled-components';

interface IPiece {
  left: number;
  top: number;
}

interface IImage extends IPiece {
  image: string;
}

interface IProps {
  image: string;
  num: number;
  position: number;
}

const translate = (x: number, y: number) => `translate(${x}px,${y}px);`

const Piece = styled.div`
  background: cyan;
  flex-shrink: 0;
  height: 67px;
  left: 16px;
  overflow: hidden;
  position: absolute;
  top: 16px;
  transform: ${({top, left}: IPiece) => translate(left, top)};
  transition: all 0.2s ease;
  width: 67px;
`;

Piece.displayName = 'Piece';

const PieceImage = styled.div`
  background: gray;
  background-image: url(${({ image }: IImage) => image});
  background-position: center center;
  background-size: cover cover;
  height: 268px;
  position: relative;
  transform: ${({top, left}: IImage) => translate(left, top)};
  width: 268px;
`;

PieceImage.displayName = 'PieceImage';

/**
 * PuzzlePiece Component
 * {num} is the number in the board where it belongs
 * {position} is the current position of the piece in the board
 * @param props { num: number, position: number }
 */
const PuzzlePiece: FC<IProps> = ({ image, num, position }) => {
  const xAgent = (ref: number) => (ref % 4) * 67;
  const yAgent = (ref: number) => Math.floor(ref / 4) * 67;

  const pieceX = xAgent(position);
  const pieceY = yAgent(position);
  const imageX = -xAgent(num);
  const imageY = -yAgent(num);

  return (
    <Piece top={pieceY} left={pieceX}>
      <PieceImage image={image} top={imageY} left={imageX} />
    </Piece>
  );
};

export default PuzzlePiece;
