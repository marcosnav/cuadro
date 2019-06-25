import axios from 'axios';

export interface IImageData {
  id: string;
  author: string;
  authorUrl: string;
  url: string;
}

interface IConfig {
  unsplashAccessKey: string;
}

/**
 * ImageFetcher provides an easy interface to fetch images from Unsplash(https://unsplash.com)
 */
export class ImageFetcher {
  private readonly unsplashAccessKey: string;
  private readonly IMAGES_ROOT: string = 'https://api.unsplash.com/photos/random?orientation=squarish';
  private readonly ANIMALS_IMAGE_URL: string = this.IMAGES_ROOT + '&query=animal';
  private readonly PATTERNS_IMAGE_URL: string = this.IMAGES_ROOT + '&query=pattern';
  private readonly MINIMAL_IMAGE_URL: string = this.IMAGES_ROOT + '&query=minimal';
  private readonly NATURE_IMAGE_URL: string = this.IMAGES_ROOT + '&query=nature';

  constructor({ unsplashAccessKey }: IConfig) {
    this.unsplashAccessKey = unsplashAccessKey;
  }

  /**
   * Get a random image
   */
  public async get(): Promise<IImageData> {
    const { ANIMALS_IMAGE_URL, unsplashAccessKey } = this;
    const authHeader = `Client-ID ${unsplashAccessKey}`
    try {
      const { data } = await axios.get(ANIMALS_IMAGE_URL, {
        headers: {
          Authorization: authHeader,
        },
      });
      return {
        author: data.user.name || 'anonymous',
        authorUrl: data.user.links.html,
        id: data.id,
        url: data.urls.regular,
      };
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
