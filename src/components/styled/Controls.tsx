import styled from 'styled-components';

interface IProps {
  newOnly?: boolean;
}

const Controls = styled.section<IProps>`
  align-items: center;
  background: ${(props) => props.theme.WHITE};
  border-radius: 3px;
  box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  display: flex;
  height: 68px;
  justify-content: space-between;
  margin-top: 26px;
  padding: ${(props) => props.newOnly ? '0 10px' : '0 16px'};
  transition: all 0.6s ease;
  width: ${(props) => props.newOnly ? 'auto' : '300px'};
`;

Controls.displayName = 'Controls';

export default Controls;
