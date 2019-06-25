import styled from 'styled-components';

const MainTitle = styled.h1`
  color: ${(props) => props.theme.TEXT};
  font-size: 1.44em;
  margin: 0;
  margin-bottom: 26px;
  text-align: center;
`;

MainTitle.displayName = 'MainTitle';

export default MainTitle;
