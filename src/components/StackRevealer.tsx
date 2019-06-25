import React, { FC, useCallback, useLayoutEffect, useState } from 'react';
import * as S from './styled';

interface IProps {
  children: React.ReactNode[];
  show?: boolean;
  direction?: 'UP'|'DOWN';
}

const childrenStack = (children: React.ReactNode[], direction: 'UP'|'DOWN' = 'UP', showTracker: number) => {
  const stack = children.map((child, index) => {
    return (
      <S.Revealer
        key={'stackchild-' + index}
        direction={direction}
        show={index <= showTracker}
      >
        {child}
      </S.Revealer>
    );
  });
  return stack;
};

const StackRevealer: FC<IProps> = ({ children, direction, show }) => {
  const [showTracker, setTrackIndex] = useState(-1);

  const updateStackReveal = useCallback(() => {
    setTimeout(() => {
      setTrackIndex(showTracker + 1);
    }, 400);
  }, [showTracker]);

  useLayoutEffect(() => {
    if (show && children.length > showTracker) {
      updateStackReveal();
    }
  }, [show, showTracker, children, updateStackReveal]);

  return (
    <div>
      {childrenStack(children, direction, showTracker)}
    </div>
  );
};

StackRevealer.defaultProps = {
  show: false,
};

export default StackRevealer;
