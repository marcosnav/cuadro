import React, { FC } from 'react';
import styled from 'styled-components';
import { icons } from './../constants';

const ButtonWrapper = styled.button`
  align-items: center;
  background: ${(props) => props.theme.WHITE};
  border: none;
  color: ${(props) => props.theme.DARK};
  display: flex;
  flex-direction: column;
  font-size: 0.64em;
  font-weight: bold;
  height 42px;
  justify-content: space-between;
  opacity: ${(props) => props.disabled ? '0.3' : '1'};
  padding: 0;

  &:focus {
    outline: none;
  }
`;

const ButtonIcon = styled.img`
  height: 26px;
  width: auto;
`;

/**
 * Available control types
 */
export enum ControlType {
  NEW_GAME = 'NEW_GAME',
  RESTART_GAME = 'RESTART_GAME',
  SEE_ORIGINAL = 'SEE_ORIGINAL',
}

interface IProps {
  type?: ControlType;
  disabled?: boolean;
  action: () => void;
}

/**
 * ControlButton Component
 * @param props { type: ControlType, disabled: boolean }
 */
const ControlButton: FC<IProps> = (props) => {
  const { action, type, disabled } = props;
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
    <ButtonWrapper onClick={evalAction} disabled={disabled}>
      <ButtonIcon src={icon} />
      {props.children}
    </ButtonWrapper>
  );
};

ControlButton.defaultProps = {
  disabled: false,
};

export default ControlButton;
