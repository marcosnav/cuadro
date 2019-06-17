import React, { FC, useState } from 'react';
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
  onNewGame: () => void;
  onRestart: () => void;
  onSeeOriginal: () => void;
  status: Status;
}

const App: FC<IAppSetup> = ({ image, puzzle, onMove, onNewGame, onRestart, onSeeOriginal, status }) => {
  const [ isLoading, setLoading ] = useState(true);

  const puzzleComponents = () => {
    return (
      [(
      <PuzzleControls
        key='puzzlecontrols'
        onNewGame={onNewGame}
        onRestart={onRestart}
        onSeeOriginal={onSeeOriginal}
      />
      ), (
      <PuzzleBoard
        key='puzzleboard'
        image={image}
        puzzleState={puzzle}
        onSwipe={onMove}
      />
      ), (
        <ShareCenter
          key='sharecenter'
        />
      ),
    ]);
  };

  setTimeout(() => {
    setLoading(false);
  }, 4000);

  return (
    <ThemeProvider theme={theme}>
      <S.AppWrapper status={isLoading ? Status.LOADING_IMAGE : Status.PLAYING_GAME} >
        <S.MainTitle show={isLoading} >
          Cuadro
        </S.MainTitle>
        <Logo status={isLoading ? Status.LOADING_IMAGE : Status.PLAYING_GAME} />
        {!isLoading ? puzzleComponents() : null}
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
