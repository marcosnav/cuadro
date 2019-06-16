import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

'https://cdn.newsapi.com.au/image/v1/5fe400894288b7956ab8d7bf9daa9881?width=650'

const swiped = (d: string) => console.log(d);
const puzzle = new PuzzleStore();
puzzle.mix();

const keycontrols = new KeyControls({
  enter: () => null,
  move: puzzle.move,
});

keycontrols.register();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
