import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Status,
  SwipeDirection,
  theme,
} from './../constants';
import Logo from './Logo';
import PrettyLink from './PrettyLink';
import PuzzleBoard from './PuzzleBoard';
import PuzzleControls from './PuzzleControls';
import ShareCenter from './ShareCenter';
import * as S from './styled';

interface IAppSetup {
  image: string;
  puzzle: number[];
  onMove: (d: SwipeDirection) => void;
  status: Status;
}

const App: FC<IAppSetup> = ({ image, puzzle, onMove, status }) => {
  return (
    <ThemeProvider theme={theme}>
      <S.AppWrapper status={status} >
        <Logo />
        <PuzzleControls />
        <PuzzleBoard
          image={image}
          puzzleState={puzzle}
          onSwipe={onMove}
        />
        <ShareCenter />
        <S.Credits>
          {'Made with </> by '}
          <PrettyLink href='https://github.com/marcosnav/cuadro'>
            marcosnav.
          </PrettyLink>
          {' See project in '}
          <PrettyLink href='https://github.com/marcosnav/cuadro'>
            GitHub.
          </PrettyLink>
        </S.Credits>
      </S.AppWrapper>
    </ThemeProvider>
  );
};

export default App;
