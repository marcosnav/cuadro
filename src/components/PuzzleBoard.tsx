import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import PuzzlePiece from './PuzzlePiece';

const Board = styled.div`
  background: ${(props) => props.theme.WHITE};
  background-position: center center;
  background-size: cover cover;
  border-radius: 3px;
  box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  margin-top: 16px;
  padding: 16px;
  position: relative;
  width: 300px;
`;

Board.displayName = 'Board';

const Holder = styled.div`
  background: ${(props) => props.theme.SOFT_GRAY};
  box-shadow: inset 0 1px 4px 2px rgba(0, 0, 0, 0.1);
  height: 268px;
  width: 268px;
`;

Holder.displayName = 'Holder';

/**
 * SwipeDirection, one of UP, RIGHT, LEFT, DOWN
 */
export enum SwipeDirection {
  UP = 'UP',
  RIGHT = 'RIGHT',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
}

interface IProps {
  image: string;
  puzzleState: number[][];
  onSwipe: (direction: SwipeDirection) => void;
}

const swipeThreshold = 50;

/**
 * PuzzleBoard Component
 * {puzzleState} The current matrix of the board pieces
 * {onSwipe} Function Handler that recieves SwipeDirection as parameter
 * @param props {puzzleState: number[][], onSwipe: Function}
 */
const PuzzleBoard: FC<IProps> = ({ image, puzzleState, onSwipe }) => {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endX, setEndX] = useState(0);
  const [endY, setEndY] = useState(0);

  const handleSwipe = () => {
    const xDistance = endX - startX;
    const yDistance = endY - startY;
    const absX = Math.abs(xDistance);
    const absY = Math.abs(yDistance);
    const { UP, DOWN, LEFT, RIGHT} = SwipeDirection;
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
  };

  const startListener = (ev: React.TouchEvent) => {
    ev.stopPropagation();
    setStartX(ev.touches[0].screenX);
    setStartY(ev.touches[0].screenY);
  };

  const endListener = (ev: React.TouchEvent) => {
    ev.stopPropagation();
    setEndX(ev.changedTouches[0].screenX);
    setEndY(ev.changedTouches[0].screenY);
  };

  useEffect(() => {
    handleSwipe();
  }, [endX, endY]);

  const boardPieces = () => {
    return [
      ...puzzleState[0],
      ...puzzleState[1],
      ...puzzleState[2],
      ...puzzleState[3],
    ].map((pos: number, index) => {
      if (!index) {
        return null;
      }
      return <PuzzlePiece key={index} image={image} num={index} position={pos} />;
    });
  };

  return (
    <Board onTouchStart={startListener} onTouchEnd={endListener}>
      <Holder>
        {boardPieces()}
      </Holder>
    </Board>
  );
};

export default PuzzleBoard;
