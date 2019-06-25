import styled, { css, keyframes, StyledProps } from 'styled-components';

interface IProps {
  animate?: boolean;
  reversed?: boolean;
}

const translateDown = keyframes`
  0%, 30%, 100% {
    transform: translateY(0);
  }
  15%, 45% {
    transform: translateY(10px);
  }
`;

const translateUp = keyframes`
  0%, 30%, 100% {
    transform: translateY(0);
  }
  15%, 45% {
    transform: translateY(-10px);
  }
`;

const wrapAnimation = (props: StyledProps<IProps>) => {
  const animation = props.reversed ? translateUp : translateDown;
  return props.animate ? css`${animation} 2s ease infinite forwards;` : 'none;';
};

const TriangleAnimator = styled.div<IProps>`
  animation: ${(props) => wrapAnimation(props)}
  left: 0;
  height: 16px;
  margin: auto;
  position: absolute;
  right: 0;
  top: 2px;
  width: 20px;
`;

TriangleAnimator.displayName = 'TriangleAnimator';

export default TriangleAnimator;
