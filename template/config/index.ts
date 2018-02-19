const PRODUCTION_MODE =
  typeof PROD !== 'undefined' || process.env.NODE_ENV === 'production'

export interface IAppConfig {
  port: number

  // put another config here...
}

// tslint:disable-next-line:no-var-requires
export default require('./' + (PRODUCTION_MODE ? 'prod' : 'dev'))
  .default as IAppConfig
