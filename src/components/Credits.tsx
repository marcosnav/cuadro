import React, { FC } from 'react';
import PrettyLink from './PrettyLink';
import * as S from './styled';

const Credits: FC = () => {
  return (
    <S.Text bottom={true}>
      {'Made with </> by '}
      <PrettyLink href='https://github.com/marcosnav/cuadro'>
        marcosnav.
      </PrettyLink>
      {' See project in '}
      <PrettyLink href='https://github.com/marcosnav/cuadro'>
        GitHub.
      </PrettyLink>
    </S.Text>
  );
};

export default Credits;
