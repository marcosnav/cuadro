import styled from 'styled-components';

interface IProps {
  bottom?: boolean;
}

const Credits = styled.p<IProps>`
  bottom: ${({ bottom }) => bottom ? '0' : 'auto'};
  color: ${(props) => props.theme.TEXT};
  font-size: 0.7em;
  left: ${({ bottom }) => bottom ? '0' : 'auto'};
  line-height: 1.44em;
  position: ${({ bottom }) => bottom ? 'fixed' : 'relative'};
  text-align: center;
  width: 100%;
`;

Credits.displayName = 'Credits';

export default Credits;
