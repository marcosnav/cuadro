import styled, { StyledProps } from 'styled-components';
import { Status } from './../../constants';

interface IProps {
  status?: Status;
}

const getGradient = (props: StyledProps<IProps>) => {
  const startingGame = props.status === Status.STARTING_NEW_GAME;
  const loadingImage = props.status === Status.LOADING_IMAGE;
  const errored = props.status === Status.ERROR;

  let startG = props.theme.GD_PURPLE;
  let endG = props.theme.GD_BLUE;

  if (startingGame || loadingImage) {
    startG = props.theme.GD_DARK_PURPLE;
    endG = props.theme.GD_PURPLE;
  }

  if (errored) {
    startG = props.theme.GD_DARK_RED;
    endG = props.theme.RED;
  }

  return `linear-gradient(180deg, ${startG} 0%, ${endG} 100%)`;
};

const AppWrapper = styled.div<IProps>`
  align-items: center;
  background: ${(props) => props.theme.PURPLE};
  background: ${ (props) => getGradient(props) };
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  padding: 26px;
  position: fixed;
  top: 0;
  transition: background 0.3s ease;
  width: 100%;
`;

AppWrapper.displayName = 'AppWrapper';

export default AppWrapper;
