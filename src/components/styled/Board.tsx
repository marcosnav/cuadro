import styled from 'styled-components';

const Board = styled.div`
  background: ${(props) => props.theme.WHITE};
  background-position: center center;
  background-size: cover;
  border-radius: 3px;
  box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  margin-top: 16px;
  padding: 16px;
  position: relative;
  width: 300px;
`;

Board.displayName = 'Board';

export default Board;
