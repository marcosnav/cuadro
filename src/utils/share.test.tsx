import { getShareFunc, SharePlatform } from './share';

describe('getShareFunc', () => {
  test('gets the function to be triggered onclick for links', () => {
    const windowSpy = jest.spyOn(window, 'open').mockImplementation(() => null);
    const facebookShareFunc = getShareFunc(SharePlatform.FACEBOOK);
    const twitterShareFunc = getShareFunc(SharePlatform.TWITTER);

    facebookShareFunc();
    expect(windowSpy).toHaveBeenCalledWith(
      'https://www.facebook.com/sharer/sharer.php?u=http://localhost/',
      'share-facebook',
      'width=580,height=296',
    );

    twitterShareFunc();
    expect(windowSpy).toHaveBeenCalledWith(
      'https://twitter.com/share?text=Cuadro%2C%20A%20Puzzle%20Game%20Made%20With%20React.JS&amp;url=http://localhost/',
      'share-twitter',
      'width=550,height=235',
    );
  });
});
