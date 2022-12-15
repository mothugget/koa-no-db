'use strict';
// import models from '../models/stuffModel';

const getStuff = ctx => {
    console.log('hello') 
    // try {
    //     ctx.body = models.getAll();
    //     ctx.status = 200;
    // } catch (err) {
    //     ctx.body = err;
    //     ctx.status = 500;
    // }
};

const postStuff = ctx => {
    // try {
    //     models.postOne(ctx.request.body);
    //     ctx.status = 201;
    // } catch (err) {
    //     ctx.body = err;
    //     ctx.status = 500;
    // }
};

export {getStuff, postStuff}