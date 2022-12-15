'use strict';
import Koa from 'koa';
const app = new Koa();
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';


import router from './router.js';

const PORT = 3000;

app.use(serve('./static'));
app.use(bodyParser());
app.use(router.routes());

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`); // eslint-disable-line no-console 
});