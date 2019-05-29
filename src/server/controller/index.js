const router = require('koa-simple-router')

export default (app) => {
	app.use(router(_ => {
		// _.get('/', indexController.actionIndex());
		// _.get('/index.html', indexController.actionIndex());
		// _.get('/add', indexController.actionAdd());
		// _.get('/save', indexController.actionSave());
		// _.get('/test', testController.actionIndex());
	}));
}