import styled from 'styled-components';

const PuzzleHolder = styled.div`
  background: ${(props) => props.theme.SOFT_GRAY};
  box-shadow: inset 0 1px 4px 2px rgba(0, 0, 0, 0.1);
  height: 268px;
  width: 268px;
`;

PuzzleHolder.displayName = 'PuzzleHolder';

export default PuzzleHolder;
