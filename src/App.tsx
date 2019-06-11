import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Controls, Logo } from './components';
import { theme } from './constants';

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

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Logo />
        <Controls />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
