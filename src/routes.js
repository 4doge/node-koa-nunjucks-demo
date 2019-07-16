const Router = require('koa-router');
const ctrl = require('./controllers');

const router = new Router();

router.get('/hello', ctrl.index);

module.exports = router;
