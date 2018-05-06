const petServ = require('../app/service/pet-service');
const db = require('../app/db');

describe(`mysql test`, () => {
  it('should add', async () => {
    // db.mysqlSequlize.sync({ force: true });
    await petServ.create();
  });
});
