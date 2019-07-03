import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Status,
  SwipeDirection,
  theme,
} from './../constants';
import Credits from './Credits';
import ErrorMessage from './ErrorMessage';
import Logo from './Logo';
import PrettyLink from './PrettyLink';
import PuzzleBoard from './PuzzleBoard';
import PuzzleControls from './PuzzleControls';
import ShareCenter from './ShareCenter';
import StackRevealer from './StackRevealer';
import * as S from './styled';
import SuccessScreen from './SuccessScreen';

interface IAppSetup {
  author: string;
  creditsUrl: string;
  image: string;
  puzzle: number[];
  onMove: (d: SwipeDirection) => void;
  onNewGame: () => void;
  onRestart: () => void;
  onSeeOriginal: () => void;
  status: Status;
}

const App: FC<IAppSetup> = (props) => {
  const { author, creditsUrl, image, puzzle, onMove, onNewGame, onRestart, onSeeOriginal, status } = props;
  const errored = status === Status.ERROR;
  const startingGame = status === Status.STARTING_NEW_GAME;
  const loadingImage = status === Status.LOADING_IMAGE;
  const displayOriginal = status === Status.DISPLAY_ORIGINAL;
  const finishedGame = status === Status.FINISHED_GAME;
  const playingGame = status === Status.PLAYING_GAME;

  const puzzleParts = () => {
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

    if (!startingGame && !finishedGame) {
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

    componentsToDisplay.push((
      <S.Text
        key='photocredits'
      >
        {'Picture by '}
        <PrettyLink href={creditsUrl + '?utm_source=cuadro&utm_medium=referral'}>
          {author}
        </PrettyLink>
        {' on '}
        <PrettyLink href={'https://unsplash.com?utm_source=cuadro&utm_medium=referral'}>
          Unsplash
        </PrettyLink>
      </S.Text>
    ));
    componentsToDisplay.push(<ShareCenter key='sharecenter' />);
    return componentsToDisplay;
  };

  const gameContainer = () => {
    return (
      <S.Positioner top={52} >
        <StackRevealer show={playingGame || displayOriginal}>
          {puzzleParts()}
        </StackRevealer>
      </S.Positioner>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <S.AppWrapper status={status} >
        <SuccessScreen image={image} show={finishedGame} />
        <S.Revealer height={52} show={startingGame || loadingImage} direction={'DOWN'}>
          <S.MainTitle>
            Cuadro
          </S.MainTitle>
        </S.Revealer>
        {!finishedGame ? <Logo status={status} /> :  null}
        {!startingGame ? gameContainer() : null}
        {errored ? <ErrorMessage /> : null}
        <Credits />
      </S.AppWrapper>
    </ThemeProvider>
  );
};

export default App;
