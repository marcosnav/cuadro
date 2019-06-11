import React, { FC } from 'react';
import styled, { css, keyframes, Keyframes } from 'styled-components';
import { theme } from './../constants';

const rotate = keyframes`
  0%, 45% {
    transform: rotate(0deg);
  }
  90%, 100% {
    transform: rotate(540deg);
  }
`;

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

const wrapAnimation = (animation: Keyframes, rest: string) => css`${animation} ${rest};`;

const LogoWrapper = styled.div`
  animation: ${(props: { animate?: boolean }) => (
    props.animate ? wrapAnimation(rotate, '2s ease infinite') : 'none;')
  }
  height: 20px;
  position: relative;
  width: 20px;
`;

const Triangle = styled.div`
  animation: ${(props: { animate?: boolean }) => (
    props.animate ? wrapAnimation(translateDown, '2s ease infinite forwards') : 'none;')
  }
  left: 0;
  height: 16px;
  margin: auto;
  position: absolute;
  right: 0;
  top: 2px;
  width: 20px;
`;

const TopTriangle = styled(Triangle)`
  animation: ${(props: { animate?: boolean }) => (
    props.animate ? wrapAnimation(translateUp, '2s ease infinite forwards') : 'none;'
  )}
`;

/**
 * Permitted Status for the Logo Component
 */
export enum Status {
  DEFAULT = 'DEFAULT',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
}

interface IProps {
  status?: Status;
}

/**
 * Logo Component
 * @param props { status: Status }
 */
const Logo: FC<IProps> = ({ status }) => {
  const fill = status === Status.ERROR ? theme.RED : theme.BLUE;
  const animate = status === Status.LOADING;

  return (
    <LogoWrapper animate={animate}>
      <TopTriangle animate={animate}>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='16' viewBox='0 0 20 16'>
          <path fill={fill} d='M10 0H0L10 16L20 0H10V2H16.5L10 12L3.5 2H10z'/>
        </svg>
      </TopTriangle>
      <Triangle animate={animate}>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='16' viewBox='0 0 20 16'>
          <path fill={fill} d='M10 16H0L10 0L20 16H10V14H16.5L10 4L3.5 14H10z'/>
        </svg>
      </Triangle>
    </LogoWrapper>
  );
};

Logo.defaultProps = {
  status: Status.DEFAULT,
};

export default Logo;
