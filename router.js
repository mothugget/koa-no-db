'use strict';
import Router from 'koa-router';
const router = new Router();
import {getStuff, postStuff} from './controllers/stuffController.js';

router.get('/stuff', getStuff);
router.post('/stuff', postStuff);

export default router;
