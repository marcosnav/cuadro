import React, { FC } from 'react';
import styled from 'styled-components';
import ControlButton, { ControlType } from './ControlButton';

const ControlsWrapper = styled.section`
  align-items: center;
  background: ${(props) => props.theme.WHITE};
  border-radius: 3px;
  box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  display: flex;
  height: 68px;
  justify-content: space-between;
  margin-top: 26px;
  padding: ${(props: { newOnly?: boolean }) => props.newOnly ? '0 10px' : '0 16px'};
  transition: all 0.6s ease;
  width: ${(props: { newOnly?: boolean }) => props.newOnly ? 'auto' : '300px'};
`;

interface IProps {
  newOnly?: boolean;
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
const Controls: FC<IProps> = ({ newOnly }) => {
  const onNewGame = () => '';
  const onRestart = () => '';
  const onSeeOriginal = () => '';

  return (
    <ControlsWrapper newOnly={newOnly}>
      <ControlButton
        action={onNewGame}
        type={ControlType.NEW_GAME}
      >
        New Game
      </ControlButton>
      {!newOnly ? secondaryControls(onRestart, onSeeOriginal) : null}
    </ControlsWrapper>
  );
};

Controls.defaultProps = {
  newOnly: false,
};

export default Controls;
