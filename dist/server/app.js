System.register(["koa", "./controller/index.js"], function (_export, _context) {
  "use strict";

  var Koa, router, app;
  return {
    setters: [function (_koa) {
      Koa = _koa.default;
    }, function (_controllerIndexJs) {
      router = _controllerIndexJs.default;
    }],
    execute: function () {
      app = new Koa();
      router(app);
      app.use(async ctx => {
        ctx.body = 'Hello World';
      });
      app.listen(3000, () => {
        console.log('端口监听成功！');
      });
    }
  };
});