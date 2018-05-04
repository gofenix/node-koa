const Router = require('koa-router');
const router = new Router();
const ctrl = require('../controller/users');

router.get('/', ctrl.hello);

module.exports = router.routes();