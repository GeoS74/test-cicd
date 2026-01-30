const assert = require('node:assert');
const app = require('../src/app');

describe('/test/base.test', () => {
  let _server;

  before(async() => {
    _server = app.listen(3000);
  });

  after(async () => {
    _server.close();
  });


  it('basic test', async () => {
    const response = await fetch(`http://localhost:3000/`)
      .then(async res => {
        const data = await res.text();
        return {
          status: res.status,
          data
        }
      });
    
    assert.equal(response.status, 200);
  })
});