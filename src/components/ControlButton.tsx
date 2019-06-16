import React, { FC } from 'react';
import { ControlType, icons } from './../constants';
import * as S from './styled';

interface IProps {
  type?: ControlType;
  disabled?: boolean;
  action: () => void;
}

/**
 * ControlButton Component
 * @param props { type: ControlType, disabled: boolean }
 */
const ControlButton: FC<IProps> = ({ action, type, disabled, children }) => {
  let icon: string = '';

  switch (type) {
    case ControlType.NEW_GAME:
      icon = icons.new;
      break;
    case ControlType.RESTART_GAME:
      icon = icons.refresh;
      break;
    case ControlType.SEE_ORIGINAL:
      icon = icons.image;
  }

  const evalAction = () => {
    if (disabled) {
      return;
    }
    action();
  };

  return (
    <S.Control onClick={evalAction} disabled={disabled}>
      <S.ControlIcon src={icon} />
      {children}
    </S.Control>
  );
};

ControlButton.defaultProps = {
  disabled: false,
};

export default ControlButton;
