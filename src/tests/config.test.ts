import { Config } from './../config';

describe('Config', () => {
  describe('.get()', () => {
    test('gets config properly from env file', () => {
      const config = new Config();
      expect(config.get('UNSPLASH_ACCESS_KEY')).toBe('TEST UNSPLASH ACCESS KEY');
    });

    test('throws error with unexistent config field', () => {
      const config = new Config();
      expect(() => config.get('UNEXISTENT_CONFIG_FIELD'))
        .toThrowError('Config is trying to get the field UNEXISTENT_CONFIG_FIELD and is not set.');
    });
  });
});
