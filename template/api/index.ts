import * as Router from 'koa-router'

export default new Router({ prefix: '/api' })
	.get('/get/:id', async (ctx) => {
		ctx.body = 'Your id is: ' + ctx.params.id
	})