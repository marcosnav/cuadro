import React, { FC } from 'react';
import { icons } from './../constants';
import * as S from './styled';

interface IProps {
  image: string;
  show?: boolean;
}

const SuccessScreen: FC<IProps> = ({ image, show }) => {
  return (
    <S.SolvedWallpaper image={image} show={show}>
      <S.ControlIcon src={icons.check} />
      <S.MainTitle>
        Well Done!
      </S.MainTitle>
    </S.SolvedWallpaper>
  );
};

SuccessScreen.defaultProps = {
  show: false,
};

export default SuccessScreen;
