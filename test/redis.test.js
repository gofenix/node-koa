const db = require('../app/db');

describe(`mogodb test`, () => {
  it('should add', async () => {
    await db.redis.set('foot', 'bar');
    const res = await db.redis.get('foot');
    expect(res).toEqual('bar');
  });
});
