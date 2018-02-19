import { IAppConfig } from './index'

/**
 * Production/release configuration
 */
export default <IAppConfig>{
  // tslint:disable-next-line:no-any
  port: process.env.PORT as any
}
