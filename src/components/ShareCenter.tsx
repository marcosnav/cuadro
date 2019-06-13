import React, { FC } from 'react';
import styled from 'styled-components';
import { getShareFunc, SharePlatform } from './../utils';
import PrettyLink from './PrettyLink';

const Section = styled.section`
  margin-top: 42px;
  text-align: center;
`;

const Title = styled.h4`
  color: ${(props) => props.theme.TEXT};
  margin: 0;
  text-align: center;
  text-transform: uppercase;
`;

const ShareSites = styled.div`
  display: flex;
  font-size: 0.83em;
  margin-top: 10px;
  justify-content: center;
  width: 300px;

  & > * {
    margin: 0 10px;
  }
`;

const ShareCenter: FC = () => {
  return (
    <Section>
      <Title>
        Share The Joy
      </Title>
      <ShareSites>
        <PrettyLink onClick={getShareFunc(SharePlatform.FACEBOOK)}>
          Facebook
        </PrettyLink>
        <PrettyLink onClick={getShareFunc(SharePlatform.TWITTER)}>
          Twitter
        </PrettyLink>
      </ShareSites>
    </Section>
  );
};

export default ShareCenter;
