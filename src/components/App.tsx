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
import SuccessScreen from './SuccessScreen';

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
  const loadingImage = status === Status.LOADING_IMAGE;
  const displayOriginal = status === Status.DISPLAY_ORIGINAL;
  const finishedGame = status === Status.FINISHED_GAME;
  const playingGame = status === Status.PLAYING_GAME;

  const puzzleComponents = () => {
    const componentsToDisplay = [
      (
      <PuzzleControls
        key='puzzlecontrols'
        status={status}
        onNewGame={onNewGame}
        onRestart={onRestart}
        onSeeOriginal={onSeeOriginal}
      />
      ),
    ];

    if (!finishedGame) {
      componentsToDisplay.push((
        <PuzzleBoard
          key='puzzleboard'
          image={image}
          puzzleState={puzzle}
          onSwipe={onMove}
          showOriginal={displayOriginal}
        />
      ));
    }

    componentsToDisplay.push(<ShareCenter key='sharecenter' />);
    return componentsToDisplay;
  };

  return (
    <ThemeProvider theme={theme}>
      <S.AppWrapper status={status} >
        <SuccessScreen author={''} image={image} show={finishedGame} creditsUrl={''} />
        <S.Revealer height={52} show={loadingImage} direction={'DOWN'}>
          <S.MainTitle>
            Cuadro
          </S.MainTitle>
        </S.Revealer>
        {!finishedGame ? <Logo status={status} /> :  null}
        <StackRevealer show={playingGame || displayOriginal}>
          {puzzleComponents()}
        </StackRevealer>
        <S.Credits bottom={true}>
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
