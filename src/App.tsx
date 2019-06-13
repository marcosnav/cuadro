import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  Controls,
  Credits,
  Logo,
  PrettyLink,
  PuzzleBoard,
  ShareCenter,
} from './components';
import { theme } from './constants';

import { PuzzleStore } from './store';

import { KeyControls } from './services/keycontrols';

const gradient = (props: { [key: string]: any }) => (
  `linear-gradient(180deg, ${props.theme.GD_PURPLE} 0%, ${props.theme.GD_BLUE} 100%);`
);

const Wrapper = styled.div`
  align-items: center;
  background: ${(props) => props.theme.PURPLE};
  background: ${ (props) => gradient(props) }
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 26px;
  position: fixed;
  width: 100%;
`;

const swiped = (d: string) => console.log(d);
const puzzle = new PuzzleStore();
puzzle.mix();

const keycontrols = new KeyControls({
  enter: () => null,
  move: puzzle.move,
});

keycontrols.register();

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Logo />
        <Controls />
        <PuzzleBoard
          image={'https://cdn.newsapi.com.au/image/v1/5fe400894288b7956ab8d7bf9daa9881?width=650'}
          puzzleState={puzzle.puzzle}
          onSwipe={swiped}
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
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
