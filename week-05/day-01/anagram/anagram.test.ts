'use strict';

import { checkAnagram } from './anagram';

const test = require('tape');

test('This checks if two strings are anagramms', t => {
  const firstWord: string = 'abc';
  const secondWord: string = 'abc';
  t.equal(checkAnagram(firstWord, secondWord), true, 'Should be equal');
  t.end();
});
