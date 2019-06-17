import React, { FC } from 'react';
import { ControlType, Status } from './../constants';
import ControlButton from './ControlButton';
import * as S from './styled';

interface IProps {
  status?: Status;
  onNewGame: () => void;
  onRestart: () => void;
  onSeeOriginal: () => void;
}


/**
 * Controls Component
 * @param props { newOnly: boolean }
 */
const PuzzleControls: FC<IProps> = ({ status, onNewGame, onRestart, onSeeOriginal }) => {
  const displayOriginal = status === Status.DISPLAY_ORIGINAL;
  const finishedGame = status === Status.FINISHED_GAME;

  const secondaryControls = () => {
    return (
      [(
        <ControlButton
          key='restart'
          action={onRestart}
          type={ControlType.RESTART_GAME}
          disabled={displayOriginal}
        >
          Restart
        </ControlButton>
      ),
      (
        <ControlButton
          key='seeoriginal'
          action={onSeeOriginal}
          type={ControlType.SEE_ORIGINAL}
        >
          {displayOriginal ? 'Hide' : 'See'} Original
        </ControlButton>
      )]
    );
  };

  return (
    <S.Controls newOnly={finishedGame}>
      <ControlButton
        action={onNewGame}
        type={ControlType.NEW_GAME}
        disabled={displayOriginal}
      >
        New Game
      </ControlButton>
      {!finishedGame ? secondaryControls() : null}
    </S.Controls>
  );
};

PuzzleControls.defaultProps = {
  status: Status.PLAYING_GAME,
};

export default PuzzleControls;
