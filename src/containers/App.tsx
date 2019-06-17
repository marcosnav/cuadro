import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { App } from './../components';
import { Status } from './../constants';
import { KeyControls } from './../services';
import { PuzzleStore } from './../store';

const puzzleStore = new PuzzleStore();
puzzleStore.mix();

const keycontrols = new KeyControls({
  enter: () => null,
  move: puzzleStore.move,
});

keycontrols.register();

const AppContainer: FC = () => (
  <App
    image={'https://cdn.newsapi.com.au/image/v1/5fe400894288b7956ab8d7bf9daa9881?width=650'}
    puzzle={puzzleStore.puzzle}
    onMove={puzzleStore.move}
    onNewGame={puzzleStore.mix}
    onRestart={puzzleStore.reload}
    onSeeOriginal={puzzleStore.mix}
    status={Status.PLAYING_GAME}
  />
);

export default observer(AppContainer);
