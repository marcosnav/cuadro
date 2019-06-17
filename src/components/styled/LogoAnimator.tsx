import styled, { css, keyframes, StyledProps } from 'styled-components';

interface IProps {
  animate?: boolean;
}

const rotate = keyframes`
  0%, 45% {
    transform: rotate(0deg);
  }
  90%, 100% {
    transform: rotate(540deg);
  }
`;

const wrapAnimation = (props: StyledProps<IProps>) => (
  props.animate ? css`${rotate} 2s ease infinite;` : 'none;'
);

const LogoAnimator = styled.div<IProps>`
  animation: ${(props) => wrapAnimation(props)}
  height: 20px;
  margin-top: ${(props) => props.animate ? 'calc(50vh - 98px)' : '0'};
  position: relative;
  transition: margin-top 0.6s ease;
  width: 20px;
`;

LogoAnimator.displayName = 'LogoAnimator';

export default LogoAnimator;
