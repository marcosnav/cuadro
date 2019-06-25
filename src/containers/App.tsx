import { observer } from 'mobx-react';
import React, { FC } from 'react';
import { App } from './../components';
import { Config } from './../config';
import { ImageFetcher, KeyControls } from './../services';
import { PuzzleStore } from './../store';

const config = new Config();
const imageProvider = new ImageFetcher({ unsplashAccessKey: config.get('UNSPLASH_ACCESS_KEY') });
const puzzleStore = new PuzzleStore(imageProvider);
puzzleStore.start();

const keycontrols = new KeyControls({
  enter: () => null,
  move: puzzleStore.move,
});

keycontrols.register();

const AppContainer: FC = () => (
  <App
    author={puzzleStore.imageAuthor.name}
    creditsUrl={puzzleStore.imageAuthor.url}
    image={puzzleStore.image}
    puzzle={puzzleStore.puzzle}
    onMove={puzzleStore.move}
    onNewGame={puzzleStore.start}
    onRestart={puzzleStore.reload}
    onSeeOriginal={puzzleStore.toggleOriginalImage}
    status={puzzleStore.state}
  />
);

export default observer(AppContainer);
