const userServ = require('../app/service/user-service');
const db = require('../app/db');

describe(`mogodb test`, () => {
  it('should add', async () => {
    db.mongodbReady('mongodb://127.0.0.1:27017/node-koa');
    await userServ.addUser();
  });
});
