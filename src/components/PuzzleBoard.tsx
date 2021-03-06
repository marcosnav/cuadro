import React, { FC, useCallback, useEffect, useState } from 'react';
import { SwipeDirection } from './../constants';
import PuzzlePiece from './PuzzlePiece';
import * as S from './styled';

interface IProps {
  image: string;
  puzzleState: number[];
  onSwipe: (direction: SwipeDirection) => void;
  showOriginal?: boolean;
}

const swipeThreshold = 50;

/**
 * PuzzleBoard Component
 * {puzzleState} The current matrix of the board pieces
 * {onSwipe} Function Handler that recieves SwipeDirection as parameter
 * @param props {puzzleState: number[][], onSwipe: Function}
 */
const PuzzleBoard: FC<IProps> = ({ image, puzzleState, onSwipe, showOriginal }) => {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endX, setEndX] = useState(0);
  const [endY, setEndY] = useState(0);

  const handleSwipe = useCallback(() => {
    const xDistance = endX - startX;
    const yDistance = endY - startY;
    const absX = Math.abs(xDistance);
    const absY = Math.abs(yDistance);
    const { UP, DOWN, LEFT, RIGHT } = SwipeDirection;
    let direction: SwipeDirection|null = null;

    if (absX < swipeThreshold && absY < swipeThreshold) {
      return;
    }

    if (absX > absY) {
      direction = xDistance > 0 ? RIGHT : LEFT;
    } else {
      direction = yDistance > 0 ? DOWN :  UP;
    }

    if (direction) {
      onSwipe(direction);
    }
  }, [startX, startY, endX, endY, onSwipe]);

  const startSwipe = (ev: React.TouchEvent) => {
    ev.stopPropagation();
    setStartX(ev.touches[0].screenX);
    setStartY(ev.touches[0].screenY);
  };

  const endSwipe = (ev: React.TouchEvent) => {
    ev.stopPropagation();
    setEndX(ev.changedTouches[0].screenX);
    setEndY(ev.changedTouches[0].screenY);
  };

  useEffect(handleSwipe, [endX, endY]);

  const boardPieces = () => {
    return puzzleState.map((at: number, piece) => {
      if (!piece) {
        return null;
      }
      return <PuzzlePiece key={piece} image={image} num={piece} position={at} />;
    });
  };

  return (
    <S.Board onTouchStart={startSwipe} onTouchEnd={endSwipe}>
      <S.PuzzleHolder>
        {boardPieces()}
        <S.OriginalImage image={image} show={showOriginal} />
      </S.PuzzleHolder>
    </S.Board>
  );
};

PuzzleBoard.defaultProps = {
  showOriginal: false,
};

export default PuzzleBoard;
