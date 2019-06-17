import React, { FC } from 'react';
import { ControlType } from './../constants';
import ControlButton from './ControlButton';
import * as S from './styled';

interface IProps {
  newOnly?: boolean;
  onNewGame: () => void;
  onRestart: () => void;
  onSeeOriginal: () => void;
}

const secondaryControls = (onRestart: () => void, onSeeOriginal: () => void) => {
  return (
    [(
      <ControlButton
        key='restart'
        action={onRestart}
        type={ControlType.RESTART_GAME}
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
        See Original
      </ControlButton>
    )]
  );
};

/**
 * Controls Component
 * @param props { newOnly: boolean }
 */
const PuzzleControls: FC<IProps> = ({ newOnly, onNewGame, onRestart, onSeeOriginal }) => {
  return (
    <S.Controls newOnly={newOnly}>
      <ControlButton
        action={onNewGame}
        type={ControlType.NEW_GAME}
      >
        New Game
      </ControlButton>
      {!newOnly ? secondaryControls(onRestart, onSeeOriginal) : null}
    </S.Controls>
  );
};

PuzzleControls.defaultProps = {
  newOnly: false,
};

export default PuzzleControls;
