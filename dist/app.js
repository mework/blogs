"use strict";

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _index = require("./controller/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
(0, _index2.default)(app);
app.use(async ctx => {
  ctx.body = 'Hello World';
});
console.log(2);
app.listen(3000, () => {
  console.log('端口监听成功！');
});