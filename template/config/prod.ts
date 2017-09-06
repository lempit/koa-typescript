import { IAppConfig } from "./index"

/**
 * Production/release configuration
 */
export default <IAppConfig>{
	port: process.env.PORT as any
}