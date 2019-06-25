import styled from 'styled-components';

const ShareSection = styled.div`
  display: flex;
  font-size: 0.83em;
  margin-top: 10px;
  justify-content: center;
  width: 300px;

  & > * {
    margin: 0 10px;
  }
`;

ShareSection.displayName = 'ShareSection';

export default ShareSection;
