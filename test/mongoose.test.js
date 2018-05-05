// import supertest from 'supertest';
const userServ=require('../app/service/user-service');
const db=require('../app/db');

describe(`mogodb test`, () => {
    it('should add', async()=>{
        db.mongodbReady('mongodb://127.0.0.1:27017/node-koa')
        // const userServ=new service.UserService();
        await userServ.addUser();
    })
});