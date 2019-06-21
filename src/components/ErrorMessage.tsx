import React, { FC } from 'react';
import * as S from './styled';

const ErrorMessage: FC = () => {
  return (
    <S.Positioner top={78} left={26} right={26}>
      <S.MainTitle>
        Oops!
      </S.MainTitle>
      <S.Text>
        Something went wrong.
        Be sure that you are connected to the internet to be able to load the images used in the puzzles.
      </S.Text>
    </S.Positioner>
  );
};

export default ErrorMessage;
