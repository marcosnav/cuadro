import styled from 'styled-components';

interface IProps {
  bottom?: boolean;
}

const Text = styled.p<IProps>`
  bottom: ${({ bottom }) => bottom ? '16px' : 'auto'};
  color: ${(props) => props.theme.TEXT};
  font-size: 0.7em;
  left: ${({ bottom }) => bottom ? '0' : 'auto'};
  line-height: 2.97em;
  margin: auto;
  max-width: 420px;
  position: ${({ bottom }) => bottom ? 'fixed' : 'relative'};
  right: ${({ bottom }) => bottom ? '0' : 'auto'};
  text-align: center;
  width: 100%;
`;

Text.displayName = 'Text';

export default Text;
