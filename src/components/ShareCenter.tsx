import React, { FC } from 'react';
import { getShareFunc, SharePlatform } from './../utils';
import PrettyLink from './PrettyLink';
import * as S from './styled';

const ShareCenter: FC = () => {
  return (
    <S.Section>
      <S.CapsTitle>
        Share The Joy
      </S.CapsTitle>
      <S.ShareSection>
        <PrettyLink onClick={getShareFunc(SharePlatform.FACEBOOK)}>
          Facebook
        </PrettyLink>
        <PrettyLink onClick={getShareFunc(SharePlatform.TWITTER)}>
          Twitter
        </PrettyLink>
      </S.ShareSection>
    </S.Section>
  );
};

export default ShareCenter;
