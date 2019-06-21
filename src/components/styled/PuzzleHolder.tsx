import styled from 'styled-components';

const PuzzleHolder = styled.div`
  background: ${(props) => props.theme.GD_BLUE};
  background: ${({ theme }) => `linear-gradient(30deg, ${theme.GD_BLUE} 0%, ${theme.GD_PURPLE} 100%)`};
  box-shadow: inset 0 1px 4px 2px rgba(0, 0, 0, 0.1);
  height: 268px;
  width: 268px;
`;

PuzzleHolder.displayName = 'PuzzleHolder';

export default PuzzleHolder;
