import styled from 'styled-components';

const Link = styled.a`
  color: ${(props) => props.theme.TEXT};
  font-weight: bold;
  text-decoration: underline;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.4;
  }
`;

Link.displayName = 'Link';

export default Link;
