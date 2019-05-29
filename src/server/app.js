import Koa from 'koa';
import router from './controller/index.js';

const app = new Koa();

router(app);

app.use(async ctx => {
	ctx.body = 'Hello World';
});

console.log()
app.listen(3000, () => {
	console.log('端口监听成功！');
});