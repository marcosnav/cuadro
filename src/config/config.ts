/**
 * On development env, the configuration will be taken from config.development.ts for ease of use.
 * On production (building the bundle), the configuration will be taken from REACT_APP_ env variables.
 */

const env = process.env;

interface IEnv {
  [key: string]: any;
}

/**
 * Config retriever and handler.
 * Looks for existing configuration in config.json and process.env.REACT_APP_
 */
export default class Config {
  private readonly envSource: IEnv;

  constructor() {
    this.envSource = this.getSource();
  }

  /**
   * Get a config field value
   * @param field Config field to get
   */
  public get(field: string): string {
    const configValue = this.envSource[field];

    if (!configValue) {
      throw new Error(
        `Config is trying to get the field ${field} and is not set.`,
      );
    }

    return configValue;
  }

  private getSource(): IEnv {
    const { NODE_ENV } = env;
    if (NODE_ENV === 'production') {
      const source: IEnv = {};
      for (const key in env) {
        if (env.hasOwnProperty(key)) {
          const clearedKey = key.replace('REACT_APP_', '');
          source[clearedKey] = env[key];
        }
      }
      return source;
    } else {
      return require(`./${NODE_ENV}.config`).CONFIG;
    }
  }
}
