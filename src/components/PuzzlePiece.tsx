import React, { FC } from 'react';
import * as S from './styled';

interface IProps {
  image: string;
  num: number;
  position: number;
}

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
    <S.Piece top={pieceY} left={pieceX}>
      <S.PieceImage image={image} top={imageY} left={imageX} />
    </S.Piece>
  );
};

export default PuzzlePiece;
