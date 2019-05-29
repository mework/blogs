const router = require('koa-simple-router')

let app = new Koa()

app.use(router(_ => {
	_.get('/', (ctx, next) => {
		ctx.body = 'hello'
	})
	_.post('/name/:id', (ctx, next) => {
		// ..
	})
}))

export default (app) => {
	app.use(router(_ => {
		// _.get('/', indexController.actionIndex());
		// _.get('/index.html', indexController.actionIndex());
		// _.get('/add', indexController.actionAdd());
		// _.get('/save', indexController.actionSave());
		// _.get('/test', testController.actionIndex());
	}));
}