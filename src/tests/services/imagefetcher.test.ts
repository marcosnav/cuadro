import axios from 'axios';
import { ImageFetcher } from './../../services/imagefetcher';

jest.mock('axios');

describe('ImageFetcher', () => {
  test('.get()', async () => {
    const reqMockData = {
      data: {
        id: 10,
        urls: {
          regular: 'https://image.url',
        },
        user: {
          links: {
            html: 'https://author.url',
          },
          name: 'John',
        },
      },
    };
    const imageFetcher = new ImageFetcher({ unsplashAccessKey: 'TEST_ACCESS_KEY' });
    axios.get.mockResolvedValue(reqMockData);
    const imageData = await imageFetcher.get();
    expect(imageData.id).toBe(10);
    expect(imageData.author).toBe('John');
    expect(imageData.authorUrl).toBe('https://author.url');
    expect(imageData.url).toBe('https://image.url');
  });

  test('exception on .get()', async () => {
    const imageFetcher = new ImageFetcher({ unsplashAccessKey: 'TEST_ACCESS_KEY' });
    axios.get.mockRejectedValue(new Error('test request error'));

    try {
      await imageFetcher.get();
    } catch (err) {
      expect(err.message).toBe('test request error');
    }
  });
});
