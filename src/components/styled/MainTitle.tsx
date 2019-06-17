import styled from 'styled-components';

interface IProps {
  show?: boolean;
}

const MainTitle = styled.h1<IProps>`
  color: ${(props) => props.theme.TEXT};
  font-size: 1.44em;
  height: ${(props) => props.show ? '26px' : '0px'};
  margin: 0;
  margin-bottom: ${(props) => props.show ? '26px' : '0px'};
  opacity: ${(props) => props.show ? '1' : '0'};
  text-align: center;
  transition: all 0.6s ease;
`;

MainTitle.displayName = 'MainTitle';

export default MainTitle;
