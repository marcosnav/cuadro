import React, { FC } from 'react';
import { icons } from './../constants';
import PrettyLink from './PrettyLink';
import * as S from './styled';

interface IProps {
  author: string;
  creditsUrl: string;
  image: string;
  show?: boolean;
}

const SuccessScreen: FC<IProps> = ({ author, creditsUrl, image, show }) => {
  return (
    <S.SolvedWallpaper image={image} show={show}>
      <S.ControlIcon src={icons.check} />
      <S.MainTitle>
        Well Done!
      </S.MainTitle>
      <S.Credits>
        {'Picture by '}
        <PrettyLink href={creditsUrl}>
          {author}
        </PrettyLink>
      </S.Credits>
    </S.SolvedWallpaper>
  );
};

SuccessScreen.defaultProps = {
  show: false,
};

export default SuccessScreen;
