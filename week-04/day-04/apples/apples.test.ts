'use strict';

import { Apple } from './apples';

const test = require('tape');

test('Check if object returns apple', t => {
  const myobject = Apple;
  t.equal('apple', myobject.getApple(), 'Should be equal');
  t.end();
});