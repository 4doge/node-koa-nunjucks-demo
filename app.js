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


router.use(require('./src/routes').routes());

app.use(router.routes());

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is up and running');
});
