System.register([], function (_export, _context) {
  "use strict";

  var router, app;
  return {
    setters: [],
    execute: function () {
      router = require('koa-simple-router');
      app = new Koa();
      app.use(router(_ => {
        _.get('/', (ctx, next) => {
          ctx.body = 'hello';
        });

        _.post('/name/:id', (ctx, next) => {// ..
        });
      }));

      _export("default", app => {
        app.use(router(_ => {// _.get('/', indexController.actionIndex());
          // _.get('/index.html', indexController.actionIndex());
          // _.get('/add', indexController.actionAdd());
          // _.get('/save', indexController.actionSave());
          // _.get('/test', testController.actionIndex());
        }));
      });
    }
  };
});