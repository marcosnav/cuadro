import styled from 'styled-components';

interface IProps {
  height?: number;
  show?: boolean;
  easeTiming?: string;
  direction?: 'UP'|'DOWN';
}

const getHeight = (height?: number) => {
  return height ? height + 'px' : 'auto';
};

const getTransform = (direction: string = 'UP') => {
  const yValue = direction === 'UP' ? '42px' : '-42px';
  return `translateY(${yValue})`;
};

const getTransition = (easeTiming: string = '0.8') => {
  return `opacity ${easeTiming}s ease, transform ${easeTiming}s ease`;
};

const Revealer = styled.div<IProps>`
  height: ${({ height, show }) => show ? getHeight(height) : '0'};
  opacity: ${({ show }) => show ? '1' : '0'};
  transform: ${({ direction, show }) => show ? 'translateY(0)' : getTransform(direction)};
  transition: ${({ easeTiming }) => getTransition(easeTiming)};
`;

Revealer.displayName = 'Revealer';

export default Revealer;
