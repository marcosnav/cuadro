import styled from 'styled-components';

const CapsTitle = styled.h4`
  color: ${(props) => props.theme.TEXT};
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`;

CapsTitle.displayName = 'CapsTitle';

export default CapsTitle;
