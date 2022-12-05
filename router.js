'use strict';
const Router = require('koa-router');
const router = new Router();
const stuff = require('./controllers/stuffController');

router.get('/stuff', stuff.getStuff);
router.post('/stuff', stuff.postStuff);

module.exports = router;
