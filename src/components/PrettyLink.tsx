import React, { FC } from 'react';
import * as S from './styled';

interface IProps {
  href?: string;
  onClick?: () => void;
}

const PrettyLink: FC<IProps> = ({ href, onClick, children }) => {
  const action = (ev: React.MouseEvent) => {
    if (onClick) {
      ev.preventDefault();
      onClick();
    }
  };

  return (
    <S.Link href={href} target='_blank' onClick={action}>
      {children}
    </S.Link>
  );
};

export default PrettyLink;
