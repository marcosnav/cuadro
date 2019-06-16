import styled from 'styled-components';

const gradient = (props: { [key: string]: any }) => (
  `linear-gradient(180deg, ${props.theme.GD_PURPLE} 0%, ${props.theme.GD_BLUE} 100%);`
);

const AppWrapper = styled.div`
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

AppWrapper.displayName = 'AppWrapper';

export default AppWrapper;
