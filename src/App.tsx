import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Controls,
  Credits,
  Logo,
  PrettyLink,
  PuzzleBoard,
  ShareCenter,
} from './components';
import { AppWrapper } from './components/styled';
import {
  Status,
  SwipeDirection,
  theme,
} from './constants';

interface IAppSetup {
  image: string;
  puzzle: number[];
  onMove: (d: SwipeDirection) => void;
  status: Status;
}

const App: FC<IAppSetup> = ({ image, puzzle, onMove}) => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Logo />
        <Controls />
        <PuzzleBoard
          image={image}
          puzzleState={puzzle}
          onSwipe={onMove}
        />
        <ShareCenter />
        <Credits>
          {'Made with </> by '}
          <PrettyLink href='https://github.com/marcosnav/cuadro'>
            marcosnav.
          </PrettyLink>
          {' See project in '}
          <PrettyLink href='https://github.com/marcosnav/cuadro'>
            GitHub.
          </PrettyLink>
        </Credits>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
