import styled from 'styled-components';

const Credits = styled.p`
  bottom: 0;
  color: ${(props) => props.theme.TEXT};
  font-size: 0.7em;
  left: 0;
  line-height: 1.44em;
  position: fixed;
  text-align: center;
  width: 100%;
`;

Credits.displayName = 'Credits';

export default Credits;
