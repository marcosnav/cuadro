const site = window.location.href;
const shareText = encodeURIComponent('Cuadro, A Puzzle Game Made With React.JS');

/**
 * Avaliable share platforms
 */
export enum SharePlatform {
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
}

const shareUri = {
  [SharePlatform.FACEBOOK]: `https://www.facebook.com/sharer/sharer.php?u=${site}`,
  [SharePlatform.TWITTER]: `https://twitter.com/share?text=${shareText}&amp;url=${site}`,
};

const windowSize = {
  [SharePlatform.FACEBOOK]: 'width=580,height=296',
  [SharePlatform.TWITTER]: 'width=550,height=235',
};

type VoidFunc = () => void;

/**
 * Share function
 * @param platform SharePlatform
 */
export const getShareFunc = (platform: SharePlatform): VoidFunc => {
  return () => {
    window.open(shareUri[platform], `share-${platform}`, windowSize[platform]);
  };
};
