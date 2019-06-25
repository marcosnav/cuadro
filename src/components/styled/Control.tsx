import styled from 'styled-components';

interface IProps {
  disabled?: boolean;
}

const Control = styled.button<IProps>`
  align-items: center;
  background: ${(props) => props.theme.WHITE};
  border: none;
  color: ${(props) => props.theme.DARK};
  display: flex;
  flex-direction: column;
  font-size: 0.64em;
  font-weight: bold;
  height 42px;
  justify-content: space-between;
  opacity: ${(props) => props.disabled ? '0.3' : '1'};
  padding: 0;
  transition: opacity 0.3s ease;

  &:focus {
    outline: none;
  }
`;

Control.displayName = 'Control';

export default Control;
