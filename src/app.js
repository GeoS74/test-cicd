const Koa = require('koa');

const app = new Koa();

app.use((ctx) => {
  ctx.status = 200;
  ctx.body = 'Test CI/CD complete !!!';
});

module.exports = app;

