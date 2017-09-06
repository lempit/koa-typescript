import 'colors'
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import * as serve from 'koa-static'
import * as path from 'path'
import * as Pug from 'koa-pug'
import config from './config'


const DEBUG_MODE = process.env.NODE_ENV == 'development'
const app = new Koa()
const PORT = config.port



// Uncomment to enable cross origin access
// import * as cors from 'kcors'
// app.use(cors({
// 	credentials: true
// }))



// Parse request bodies
app.use(bodyParser())



// Init pug
const pug = new Pug({
	debug: DEBUG_MODE,
	viewPath: './view',
	basedir: './view'
})
pug.use(app)



// Init router
import api from "./api"
app.use(api.routes())



// Main app
app
	.use(serve(path.join(__dirname, '../view')))
	.use(ctx => {
		ctx.render('index', {
			dev: DEBUG_MODE
		})
	})
	.listen(PORT, () => {
		console.log((DEBUG_MODE ? 'Development'.green : 'Production'.red) + ' Server Started ∹'.green, 'http://localhost:'.grey + PORT.toString().blue)
	})