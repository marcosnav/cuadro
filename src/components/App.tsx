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
import StackRevealer from './StackRevealer';
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
  const puzzleComponents = () => {
    return (
      [
        (
        <PuzzleControls
          key='puzzlecontrols'
          status={status}
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
          showOriginal={status === Status.DISPLAY_ORIGINAL}
        />
        ), (
          <ShareCenter
            key='sharecenter'
          />
        ),
      ]
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <S.AppWrapper status={status} >
        <S.Revealer height={52} show={status === Status.LOADING_IMAGE} direction={'DOWN'}>
          <S.MainTitle>
            Cuadro
          </S.MainTitle>
        </S.Revealer>
        <Logo status={status} />
        <StackRevealer show={status === Status.PLAYING_GAME || status === Status.DISPLAY_ORIGINAL}>
          {puzzleComponents()}
        </StackRevealer>
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
