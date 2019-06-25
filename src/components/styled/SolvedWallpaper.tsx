import styled from 'styled-components';
import AppWrapper from './AppWrapper';

interface IProps {
  image?: string;
  show?: boolean;
}

const SolvedWallpaper = styled(AppWrapper)<IProps>`
  background: ${({ theme }) => theme.PURPLE};
  background-image: url("${({ image }) => image}");
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  left: 0;
  opacity: ${({ show }) => show ? '1' : '0'};
  top: 0;
  transition: opacity 1.2s ease;

  & > * {
    margin-bottom: 0px;
  }

  & > img {
    margin-bottom: 16px;
  }

  &::before,
  &::after {
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    content: '';
    height: 134px;
    left: 0;
    right: 0;
    position: absolute;
    top: 0;
    z-index: -1;
  }

  &::after {
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    bottom: 0;
    top: auto;
  }
`;

SolvedWallpaper.displayName = 'SolvedWallpaper';

export default SolvedWallpaper;
