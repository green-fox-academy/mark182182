'use strict';

import checkCard from 'poker';

const test = require('tape');

test('One is equal to one', t => {
  t.equal(1, 1);
  t.end();
});

test('Check if given string is card', t => {
  t.ok(checkCard('2X'), 'Should be card');
  t.end();
});