'use strict';

const test = require('tape');
const request = require('supertest');
const appMethod = require('./server');

test('Check if / endpoint status is 200', t => {
  request(appMethod.app)
    .get('/')
    .expect(200)
    .end(function (err, res) {
      if (err) {
        t.error(err);
      }
      t.deepEquals(res.status, 200, 'Status is 200 on /');
    });
  t.end();
});

test('Check if /attraction endpoint status is 200', t => {
  request(appMethod.app)
    .get('/attractions')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) {
        t.error(err);
      }
      t.deepEquals(res.status, 200, 'Status is 200 on /attractions');
    });
  t.end();
});

test('Check if /add endpoint status is 200', t => {
  request(appMethod.app)
    .post('/add')
    .send({})
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) {
        t.error(err);
      }

      t.deepEquals(res.status, 200, 'Status is 200 on /add');
    });
  t.end();
});

test('Check if /budget endpoint status is 200', t => {
  request(appMethod.app)
    .get('/budget')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) {
        t.error(err);
      }
      t.deepEquals(res.status, 200, 'Status is 200 on /budget');
    });
  t.end();
});

test('Check if not existing endpoint is 404', t => {
  request(appMethod.app)
    .get('/doesnotexist')
    .expect(404)
    .end(function (err, res) {
      if (err) {
        t.error(err);
      }
      t.deepEquals(res.status, 404, 'Status is 404 on /doesnotexist');
      appMethod.conn.end();
      appMethod.server.close();
    });
  t.end();
});

test('Check if /budget correct attractions are returned', t => {
  request(appMethod.app)
    .get('/budget')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      if (err) {
        t.error(err);
      } t.deepEquals(res.body, [
        [
          {
            "id": 3,
            "attr_name": "Pulitzer",
            "city": "Budapest",
            "category": "restaurant",
            "price": 1200,
            "longitude": 47.4841,
            "latitude": 19.0602,
            "recommended_age": 3,
            "duration": 60
          }
        ],
        [
          {
            "id": 4,
            "attr_name": "Heroes' Square",
            "city": "Budapest",
            "category": "park",
            "price": 0,
            "longitude": 47.4841,
            "latitude": 19.0601,
            "recommended_age": 3,
            "duration": 30
          }
        ],
        [
          {
            "id": 2,
            "attr_name": "House of Terror",
            "city": "Budapest",
            "category": "museum",
            "price": 3000,
            "longitude": 47.4841,
            "latitude": 19.0602,
            "recommended_age": 3,
            "duration": 120
          }
        ]
      ], 'Attractions are correct');
    });
  t.end();
});