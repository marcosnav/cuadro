import React, { FC } from 'react';
import { Status, theme } from './../constants';
import * as S from './styled';

interface IProps {
  status?: Status;
}

/**
 * Logo Component
 * @param props { status: Status }
 */
const Logo: FC<IProps> = ({ status }) => {
  const fill = status === Status.ERROR ? theme.RED : theme.BLUE;
  const animate = status === Status.LOADING_IMAGE || status === Status.STARTING_NEW_GAME;

  return (
    <S.LogoAnimator animate={animate}>
      <S.TriangleAnimator animate={animate}>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='16' viewBox='0 0 20 16'>
          <path fill={fill} d='M10 0H0L10 16L20 0H10V2H16.5L10 12L3.5 2H10z'/>
        </svg>
      </S.TriangleAnimator>
      <S.TriangleAnimator reversed={true} animate={animate}>
        <svg xmlns='http://www.w3.org/2000/svg' width='20' height='16' viewBox='0 0 20 16'>
          <path fill={fill} d='M10 16H0L10 0L20 16H10V14H16.5L10 4L3.5 14H10z'/>
        </svg>
      </S.TriangleAnimator>
    </S.LogoAnimator>
  );
};

Logo.defaultProps = {
  status: Status.PLAYING_GAME,
};

export default Logo;
