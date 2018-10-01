'use strict';

const test = require('tape');
const request = require('supertest');
const appMethod = require('./server');

test('Check if distance is zero', t => {
  const distance = 0;
  const time = 10;
  request(appMethod.app)
    .get('/yondu?' + 'distance=' + distance + '&time=' + time)
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) {
        t.error(err);
      }
      t.deepEquals(res.body, { distance: `${distance}`, time: `${time}`, speed: 0 });
      appMethod.server.close();
    });
  t.end();
}); 