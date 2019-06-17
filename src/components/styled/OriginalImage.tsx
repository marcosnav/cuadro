import styled from 'styled-components';

interface IProps {
  image: string;
  show?: boolean;
}

const OriginalImage = styled.div<IProps>`
  background-image: url("${({ image }) => image}");
  background-size: cover cover;
  background-position: center center;
  height: 100%;
  opacity: ${({ show }) => show ? '1' : '0'};
  pointer-events: ${({ show }) => show ? 'auto' : 'none'};
  position: relative;
  transition: opacity 0.6s ease;
  width: 100%;

  &::before {
    background: ${({ theme }) => theme.SOFT_GRAY};
    content: '';
    box-shadow: inset 0 1px 4px 2px rgba(0, 0, 0, 0.2);
    height: 67px;
    left: 0;
    position: absolute;
    top: 0;
    width: 67px;
  }
`;

OriginalImage.displayName = 'OriginalImage';

export default OriginalImage;
