const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const path = require('path');

const app = new Koa();
const router = new Router();

app.use(views(path.join(__dirname, './src/templates'), {
  extension: 'njk',
  map: {
    njk: 'nunjucks',
  },
}));

app.use(async (ctx, next) => {
  // eslint-disable-next-line no-console
  console.log(ctx.response);
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  // eslint-disable-next-line no-console
  console.log(ctx.response);
  ctx.set('X-Response-Time', `${ms}ms`);
});

router.use(require('./src/routes').routes());

app.use(router.routes());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up and running');
});
