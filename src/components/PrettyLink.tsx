import React, { FC } from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color: ${(props) => props.theme.TEXT};
  font-weight: bold;
  text-decoration: underline;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.4;
  }
`;

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
    <Link href={href} target='_blank' onClick={action}>
      {children}
    </Link>
  );
};

export default PrettyLink;
