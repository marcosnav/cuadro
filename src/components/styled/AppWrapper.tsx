import styled, { StyledProps } from 'styled-components';
import { Status } from './../../constants';

interface IProps {
  status?: Status;
}

const getGradient = (props: StyledProps<IProps>) => {
  let startG = props.theme.GD_PURPLE;
  let endG = props.theme.GD_BLUE;

  if (props.status === Status.LOADING_IMAGE) {
    startG = props.theme.GD_DARK_PURPLE;
    endG = props.theme.GD_PURPLE;
  }

  if (props.status === Status.ERROR) {
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
  padding: 26px;
  position: fixed;
  transition: background 0.3s ease;
  width: 100%;
`;

AppWrapper.displayName = 'AppWrapper';

export default AppWrapper;
